const { sequelize } = require("../models");
const { Op } = require("sequelize");
const models = require("../models");
const fastValidator = require("fastest-validator");

var annee = new Date().getUTCFullYear();

exports.races = (req, res, next) => {
  models.Race.findAll()
    .then((bovin) => {
      return res.status(200).json(bovin);
    })
    .catch((err) => {
      return res.status(500).json({ error: true, message: err });
    });
};

exports.enregistrer = async (req, res) => {
  const shema = {
    nomRace: { optional: false, type: "string", max: "100" },
  };
  const v = new fastValidator();
  const validation = v.validate(req.body, shema);
  if (!validation) {
    return res
      .status(200)
      .json({ error: true, message: "veillez remplir tous les champs" });
  }
  nomRace = req.body.nomRace;
  let user = {
    nomRace: req.body.nomRace,
  };
  const user0 = await models.Race.findOne({
    where: { nomRace: nomRace },
  });
  if (user0) {
    return res.status(200).json({
      err: true,
      error: "La existe déja",
      
    });
  }
  console.log(req.body);
  const utilisateur = await models.Race.create(req.body);
  return res.status(200).json({
    err: false,
    raceId: utilisateur.id,
  });
};

