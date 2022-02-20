const User = require('../models/User').User;
const Patient = require('../models/Patient').Patient;
const Test = require('../models/Test').Test;
const faker = require('Faker');
const tools = require('../utils/Tools');
const { Sequelize } = require('sequelize');

exports.initialize = async function () {
    //relations
    Test.belongsTo(Patient, {
        foreignKey: 'PatientId'
    });
    Patient.hasMany(Test, {
        foreignKey: 'PatientId'
    });



    //create by
    Test.belongsTo(User, {
        foreignKey: 'creatorId'
    });
    User.hasMany(Test, {
        foreignKey: 'creatorId'
    });

    //create by
    Patient.belongsTo(User, {
        foreignKey: 'creatorId'
    });
    User.hasMany(Patient, {
        foreignKey: 'creatorId'
    });



    //last edit by
    Test.belongsTo(User, {
        foreignKey: 'modifierId'
    });
    User.hasMany(Test, {
        foreignKey: 'modifierId'
    });

    //last edit by
    Patient.belongsTo(User, {
        foreignKey: 'modifierId'
    });
    User.hasMany(Patient, {
        foreignKey: 'modifierId'
    });


    //Table creation
    User.sync({ alter: true });
    Patient.sync({ alter: true });
    Test.sync({ alter: true });
}

exports.isNewDB = async function (nbr) {
    return await User.count();
};

exports.seedUser = async function (nbr) {
    for (let index = 0; index < nbr; index++) {
        User.create({ "firstName": faker.name.firstName(), "lastName": faker.name.lastName(), "account": faker.internet.email(), "password": faker.internet.password(), "isadmin": false })
    }
};

exports.seedPatient = async function (nbr) {
    for (let index = 0; index < nbr; index++) {
        User.findAll({ order: Sequelize.literal('random()'), limit: 1, raw: true }).then(async (resp) => {
            const user = resp[0];
            Patient.create({ "firstName": faker.name.firstName(), "lastName": faker.name.lastName(), "gender": faker.name.gender(), "age": tools.randomIntervalNuber(3, 120), "creatorId": user.id },
            {include:[User]});
        });
    }
};


exports.seedTest = async function (nbr) {
    for (let index = 0; index < nbr; index++) {
        User.findAll({ order: Sequelize.literal('random()'), limit: 1, raw: true }).then(async (resp) => {
            const user = resp[0];
            Patient.findAll({ order: Sequelize.literal('random()'), limit: 1, raw: true }).then(async (resp) => {
                const patient = resp[0];
                const mtb=['POSITIVE', 'NEGATIVE','UNKNOWN','ERROR'];
                const rif=['RESISTANT', 'NOT RESISTANT', 'UNKNOWN'];
                const mtbResult=mtb[tools.randomIntervalNuber(0, 3)];
                var result="MTB:" + mtbResult;
                if (mtbResult=="POSITIVE"){
                    result= result + " RIF:" + rif[tools.randomIntervalNuber(0, 2)];
                }
                Test.create({ "sampleId": faker.random.uuid(), "date": faker.date.past(),"result":result , "creatorId": user.id, "PatientId":patient.id},
                {include:[User, Patient]});
            });
        });
    }
};

