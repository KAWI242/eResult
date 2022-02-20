const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../database/connexion').sequelize;

class Test extends Model { 


}

Test.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    sampleId: {
        type: DataTypes.STRING
    },
    result: {
        type: DataTypes.STRING,
    }
}, {
    sequelize, // We need to pass the connection instance
    modelName: 'Test' // We need to choose the model name
});

exports.Test=Test;