// 引入mysql的配置文件
const db = require('../config/db');
const { DataTypes } = require('sequelize');

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
        return await Message.create({
            content: content,
        });
    }

    /**
     * 查询历史消息记录
     * @param page 页数
     * @param capacity 每页条数
     * @returns {Promise<Model>}
     */
    static async getMessages(page, capacity) {
        const res = await Message.findAndCountAll({
            attributes: ['id', 'content', 'createdAt'],
            order: [['createdAt', 'ASC']],
            limit: capacity,
            offset: (page - 1) * capacity,
            // where,
            // include: [{
            //     model: Message,
            //     as: 'MessageInfo',
            // }],
            // distinct: true
        });

        return res;
    }
}

module.exports = MessageModel;