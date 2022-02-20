const { Sequelize } = require('sequelize');
//connexion to db
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './data/sequelize_dev.db'
});

exports.initialize = async function () {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        return true;
    } catch (error) {
        console.error('Unable to connect to the database:', error);
        return false;
    }
}

exports.sequelize = sequelize;


