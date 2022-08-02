var bcrypt = require("bcrypt");
var jwtUtils = require("../utils/jwt.utils");
var models = require("../models");
var asyncLib = require("async");
const fastValidator = require("fastest-validator");
const { sequelize } = require("../models");


const date = new Date().toLocaleDateString().replaceAll('/', '-')
exports.allCommandeLait = async (req, res) => {
    var id = req.params.email
    sequelize.query(
        `SELECT sum(v.capacite) as capacite, c.dateCom as date from utilisateurs u, commande c , ventelait v WHERE u.id = c.idUtilisateur AND c.idCom=v.idCom AND v.etat=true and u.email="${id}" GROUP by date`
    ).then((vente) => {
        return res.status(200).json(vente);
    });
}

exports.allCommandeBovin = async (req, res) => {
    var id = req.params.email
    sequelize.query(
        `SELECT c.dateCom as date, r.nomRace as race, b.nom, b.description, v.prixBovin as prix from utilisateurs u, commande c , ventebovin v, bovin b, race r WHERE u.id = c.idUtilisateur AND c.idCom=v.idCom AND b.situation='vendu' and b.idRace=r.idRace AND b.idBovin=v.idBovin and u.email="${id}"`
    ).then((vente) => {
        return res.status(200).json(vente);
    });
}
exports.passercommandeLait = async (req, res) => {
    const donnees = req.body
    var id = req.params.email
    console.log(donnees.quantite)
    const idu = await models.Utilisateur.findOne({ where: { email: req.params.email }, attributes: ["id"] })
    const user = await sequelize.query(
        'INSERT INTO commande (idCom, idUtilisateur, idPaiement,dateCom) VALUES (?, ?, ?, ?)',
        {
            type: sequelize.QueryTypes.INSERT,
            replacements: [0, idu.id, donnees.paiement, date],
        },
    );
    const com = await sequelize.query(
        'INSERT INTO ventelait (idCom, capacite, etat) VALUES (?, ?, ?)',
        {
            type: sequelize.QueryTypes.INSERT,
            replacements: [user[0], donnees.quantite, false],
        },
    );

    return res.status(200).json({
        err: false,
        message: 'Enregistrer'
    });
}

exports.supprimercommandeLait = async (req, res) => {

    var id = req.params.email

    const idu = await models.Utilisateur.findOne({ where: { email: req.params.email }, attributes: ["id"] })
    const user = await sequelize.query(
        'DELETE from commande where idUtilisateur=? And idcom=? limit 1',
        {
            type: sequelize.QueryTypes.INSERT,
            replacements: [idu.id, req.params.id],
        },
    );
    const com = await sequelize.query(
        'DELETE from ventelait where idcom=? And etat=? limit 1',
        {
            type: sequelize.QueryTypes.INSERT,
            replacements: [req.params.id, false],
        },
    );

    return res.status(200).json({
        err: false,
        message: 'supprimer'
    });
}
exports.supprimerPanier = async (req, res) => {

    var id = req.params.email

    const idu = await models.Utilisateur.findOne({ where: { email: req.params.email }, attributes: ["id"] })
    const user = await sequelize.query(
        'DELETE from panier where idUtilisateur=? And idBovin=? limit 1',
        {
            type: sequelize.QueryTypes.INSERT,
            replacements: [idu.id, req.params.id],
        },
    );
    const com = await sequelize.query(
        'UPDATE `bovin` SET situation =? WHERE idBovin=? limit 1',
        {
            type: sequelize.QueryTypes.INSERT,
            replacements: ["Pas en vente", req.params.id],
        },
    );

    return res.status(200).json({
        err: false,
        message: 'supprimer'
    });
}
exports.getCommandeLaitEncours = (req, res) => {
    var id = req.params.email
    sequelize.query(
        `SELECT c.idCom as id, v.capacite as capacite, c.dateCom as date, p.type as type from utilisateurs u, paiement p, commande c , ventelait v WHERE u.id = c.idUtilisateur AND p.id=c.idPaiement AND c.idCom=v.idCom AND v.etat=false and u.email="${id}"`
    ).then((vente) => {
        return res.status(200).json(vente);
    });
}

exports.getPanier = (req, res) => {
    var id = req.params.email
    sequelize.query(
        `SELECT Distinct b.idBovin as id,b.nom as nom,r.nomRace as race, b.description as description, b.prix as prix from bovin b,race r, utilisateurs u, panier p WHERE u.id = p.idUtilisateur AND b.situation='en cours' and r.idRace=b.idRace and u.email="${id}"`
    ).then((vente) => {
        return res.status(200).json(vente);
    });
}

exports.getCommandeEnCours = (req, res) => {
    var id = req.params.email
    sequelize.query(
        `SELECT b.idBovin as id,b.nom as nom,r.nomRace as race, b.prix as prix from bovin b,race r, utilisateurs u, panier p WHERE u.id = p.idUtilisateur AND b.situation='commander' and r.idRace=b.idRace and u.email="${id}"`
    ).then((vente) => {
        return res.status(200).json(vente);
    });
}

// exports.mettreCommande = (req, res) => {
//     const idBovin = await models.Utilisateur.findOne({ where: { email: req.params.email }, attributes: ["id"] })
// }

exports.ajouterPanier = async (req, res) => {
    const donnees = req.body
    var id = req.params.email
    
    const idBovin = await models.Utilisateur.findOne({ where: { email: req.params.email }, attributes: ["id"] })
    // const idTest = 
    const bovin = await sequelize.query(
        'INSERT INTO panier (idUtilisateur, idBovin) VALUES (?, ?) ',
        {
            type: sequelize.QueryTypes.INSERT,
            replacements: [idBovin.id, donnees.idBovin],
        },
    );
    const update = await sequelize.query(
        'UPDATE `bovin` SET situation=? WHERE idBovin=? limit 1',
        {
            type: sequelize.QueryTypes.INSERT,
            replacements: ["en cours", donnees.idBovin],
        },
    );

    return res.status(200).json({
        err: false,
        message: 'Commande ajouter avec succes'
    });
}


exports.commanderBovin = async (req, res) => {
    const donnees = req.body
    var id = req.params.email
    
    const idu = await models.Utilisateur.findOne({ where: { email: req.params.email }, attributes: ["id"] })
    // const idTest = 
    const bovin = await sequelize.query(
        'INSERT INTO commande (idCom, idUtilisateur, idPaiement,dateCom) VALUES (?, ?, ?, ?) ',
        {
            type: sequelize.QueryTypes.INSERT,
            replacements: [0, idu.id, donnees.paiement, date],
        },
    );
    const vente = await sequelize.query(
        'INSERT INTO ventebovin (idCom, idBovin, prixBovin) VALUES (?, ?, ?) ',
        {
            type: sequelize.QueryTypes.INSERT,
            replacements: [bovin[0],donnees.idBovin, donnees.prix],
        },
    );

    const update = await sequelize.query(
        'UPDATE `bovin` SET situation=? WHERE idBovin=? limit 1',
        {
            type: sequelize.QueryTypes.INSERT,
            replacements: ["commander", donnees.idBovin],
        },
    );

    return res.status(200).json({
        err: false,
        message: 'Commande ajouter avec succes'
    });
}

