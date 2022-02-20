const User = require('../models/User').User;


module.exports = {
    login: function (req, res) {
        res.status(200).send({ "message": "login reached" });
    },
    register: function (req, res) {
        res.status(200).send({ "message": "register reached" });
    },
    getAll: function (req, res) {
        var orderArray = req.param('order')  || [];
        var limite = req.param('limit') || 50;

        User.findAll({attributes:["id","firstName","lastName","account", "createdAt","updatedAt"],  "order": orderArray, "limit":limite , raw: true }).then(async (resp) => {
            res.status(200).send(resp);
        }, (error) => {
            res.status(500).send({ "message": error });
        });
    },
    getOne: function (req, res) {
        var id = req.param('id')  ||0;
        User.findByPk(id).then(async (resp) => {
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

