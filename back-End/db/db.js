const Sequelize = require('sequelize');
let sequelize = new Sequelize('postgres://postgres:fernandez10@localhost:5432/omdb',{
    logging: false,
    dialect: 'postgres'
});

module.exports = sequelize;