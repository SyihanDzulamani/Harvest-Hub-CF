const {Sequelize} = require('sequelize');

const connection = new Sequelize('harvest_hub', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

if(!connection) {
    console.log("Error")
  } else{
    console.log("Connect")
  }

module.exports.connect = connection; 
