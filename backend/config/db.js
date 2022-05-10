const Sequelize = require('sequelize');
const sequelize = new Sequelize('tree_hollow','tree_hollow','JrMPnzyJfLndMcs8',{
    host:'120.78.154.19',
    dialect:'mysql',
    operatorsAliases:false,
    dialectOptions:{
        //字符集
        charset:'utf8mb4',
        supportBigNumbers: true,
        bigNumberStrings: true
    },
    pool:{
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    timezone: '+08:00'  //东八时区
});

module.exports = {
    sequelize
};