const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../database/connexion').sequelize;

class Patient extends Model { 


}

Patient.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING
    },
    age: {
        type: DataTypes.INTEGER.ZEROFILL,
    },
    gender: {
        type: DataTypes.STRING
    }
}, {
    sequelize, // We need to pass the connection instance
    modelName: 'Patient' // We need to choose the model name
});

exports.Patient=Patient;