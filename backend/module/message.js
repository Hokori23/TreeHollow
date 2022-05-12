// 引入mysql的配置文件
const db = require('../config/db');
const { DataTypes, Op } = require('sequelize');

// 引入sequelize对象
const Sequelize = db.sequelize;

// 引入数据表模型
const Message = require('../schema/message')(Sequelize, DataTypes);
Message.sync({force: true}); //自动创建表

class MessageModel {
    /**
     * 创建信息模型
     * @param total
     * @param data
     * @returns {Promise<*>}
     */
    static async createMessage(content) {
        const res = await Message.create({
            content: content,
        });
        return res;
    }

    /**
     * 查询历史消息记录
     * @param pageSize 消息条数
     * @returns {Promise<Model>}
     */
    static async getMessages(pageSize, createdAt, before) {
        console.log(createdAt, typeof before);
        let ans = [];
        if (before === 0) {
            const res = await Message.findAll({
                attributes: ['id', 'content', 'createdAt'],
                order: [['createdAt', 'DESC']],
                limit: pageSize,
                where: {
                    createdAt: {
                        [Op.lt]: createdAt
                    }
                }
                // include: [{
                //     model: Message,
                //     as: 'MessageInfo',
                // }],
                // distinct: true
            });
            // console.log(666, res);
            for (let i = res.length - 1; i >= 0; i--) {
                ans.push(res[i].dataValues);
            }
        } 
        if (before === 1) {
            const res = await Message.findAll({
                attributes: ['id', 'content', 'createdAt'],
                order: [['createdAt', 'DESC']],
                limit: pageSize,
                where: {
                    createdAt: {
                        [Op.gt]: createdAt
                    }
                }
            });
            // console.log(999, res);
            res.forEach(item => {
                ans.push(item.dataValues)
            });
        }
        
        return ans;
    }
}

module.exports = MessageModel;