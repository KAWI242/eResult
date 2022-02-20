var express = require('express');
var user = require('./controllers/User');
var patient = require('./controllers/Patient');
var test = require('./controllers/Test');

exports.initialize = async function (urlBase,expressApp) {
    var router = express.Router();

    //User
    router.route("/user/login").get(user.login);
    router.route("/user/register").get(user.register);
    router.route("/user/all").get(user.getAll);
    router.route("/user/one/").get(user.getOne);

    //Patient
    router.route("/patient/all").get(patient.getAll);
    router.route("/patient/one/").get(patient.getOne);


     //Test
     router.route("/test/all").get(test.getAll);
     router.route("/test/day").get(test.getTestOfDay);
     router.route("/test/one/").get(test.getOne);


    expressApp.use(urlBase,router); 
};



