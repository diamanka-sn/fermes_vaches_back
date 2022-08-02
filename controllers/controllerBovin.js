const { sequelize } = require("../models");
const { Op } = require("sequelize");
const models = require("../models");
const fastValidator = require("fastest-validator");

var annee = new Date().getUTCFullYear();

exports.bovins = (req, res, next) => {
  sequelize.query(
    `SELECT * from bovin b, race r where r.idRace = b.idRace and b.etat != 'Mort' and b.situation = 'En vente'`
  ).then((vente) => {
    return res.status(200).json(vente);
  });
};

exports.sommeTraite = (req, res, next) => {
  sequelize.query(
    `SELECT sum(traiteMatin)+sum(traiteSoir) as traite from traitedujour`
  ).then((vente) => {
    return res.status(200).json(vente);
  });
};

exports.laitVendu = (req, res)=>{
  sequelize.query(
    `SELECT sum(capacite) as capacite from ventelait`
  ).then((vente) => {
    return res.status(200).json(vente);
  });
}

exports.getVacheEnvente = (req,res) => {
  sequelize.query(
    `SELECT * from bovin b, race r, vache v where r.idRace = b.idRace and b.etat != 'Mort' and b.situation = 'En vente' and b.idBovin=v.idBovin`
  ).then((vente) => {
    return res.status(200).json(vente);
  });
}

exports.getTaureaux = (req,res) => {
  sequelize.query(
    `SELECT * from bovin b, race r where r.idRace = b.idRace and b.etat != 'Mort' and b.situation = 'En vente' and b.description='Taureau'`
  ).then((vente) => {
    return res.status(200).json(vente);
  });
}