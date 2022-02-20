const Test = require('../models/Test').Test;
const { Sequelize } = require('sequelize');
const Op = Sequelize.Op;
const TODAY_START = new Date().setHours(0, 0, 0, 0);
const NOW = new Date();
const BETWEEN=[Op.between];

module.exports = {
    getAll: function (req, res) {
        var orderArray = req.param('order')  || [];
        var limite = req.param('limit') ||50;

        Test.findAll({ "order": orderArray, "limit":limite , raw: true }).then(async (resp) => {
            res.status(200).send(resp);
        }, (error) => {
            res.status(500).send({ "message": error });
        });
    },
    getTestOfDay: function (req, res) {
        var orderArray = req.param('order')  || [];
        var limite = req.param('limit') ||50;
        Test.findAll({where: {"date": {[Op.between]: [TODAY_START, NOW]} },"order": orderArray, "limit":limite , raw: true }).then(async (resp) => {
            res.status(200).send(resp);
        }, (error) => {
            res.status(500).send({ "message": error });
        });
    },
    getOne: function (req, res) {
        var id = req.param('id')  ||0;
        Test.findByPk(id).then(async (resp) => {
            if (resp){
                res.status(200).send(resp);
            } else {
                res.status(404).send(resp);
            }
        }, (error) => {
            res.status(500).send({ "message": error });
        });
    }
}

