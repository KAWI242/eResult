const Patient = require('../models/Patient').Patient;


module.exports = {
    getAll: function (req, res) {
        var orderArray = req.param('order')  || [];
        var limite = req.param('limit') ||50;

        Patient.findAll({ "order": orderArray, "limit":limite , raw: true }).then(async (resp) => {
            res.status(200).send(resp);
        }, (error) => {
            res.status(500).send({ "message": error });
        });
    },
    getOne: function (req, res) {
        var id = req.param('id')  ||0;
        Patient.findByPk(id).then(async (resp) => {
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

