const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../database/connexion').sequelize;

class User extends Model { 

}

User.init({
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
    account: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize, // We need to pass the connection instance
    modelName: 'User' // We need to choose the model name
});

exports.User=User;