// const moment = require("moment");
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('message',{
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: true,
            autoIncrement: true
        },
        // total:{
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //     field: 'total'
        // },
        //内容
        content:{
            type: DataTypes.STRING,
            allowNull: false,
            field:'content'
        },
        // 创建时间
        createdAt:{
            type: DataTypes.DATE
        },
        updatedAt: {
            type: DataTypes.DATE
        }
    },{
        /**
         * 如果为true，则表示名称和model相同，即user
         * 如果为fasle，mysql创建的表名称会是复数，即users
         * 如果指定的表名称本身就是复数，则形式不变
         */
        freezeTableName: true
    });
}