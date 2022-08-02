// route
const express = require('express')
const routes = express.Router()
const controller = require('../controllers/controllerBovin')



module.exports = routes


// controller

const { sequelize } = require("../models");
const { Op } = require("sequelize");
const models = require("../models");
