const MessageModel = require("../module/message");

class MessageController {
    /**
     * 接收信息
     * @param ctx
     * @returns {Promise.<void>}
     */
    static async getMessages(ctx, next){
        const { capacity, createdAt = new Date().getTime(), before = 1 } = ctx.query;
        const pageSize = Number(capacity);
        const flag = Number(before);
        if(pageSize){
            try{
                const res = await MessageModel.getMessages(pageSize, createdAt, flag);
                ctx.response.status = 200;
                ctx.body = {
                    code: 0,
                    message: '获取消息记录成功',
                    data: {
                        message: res
                    }
                }
            } catch (err) {
                ctx.response.status = 412;
                ctx.body = {
                    code: 412,
                    message: '拉取记录失败',
                    data: err
                }
            }
        }else {
            ctx.response.status = 416;
            ctx.body = {
                code: 200,
                message: '参数错误'
            }
        }
    }

    /**
     * 发消息
     * @param ctx
     * @returns {Promise.<void>}
     */
    static async sendMessage(ctx) {
        const { content } = ctx.request.body;

        if (content) {
            try{
                // 查询文章详情模型
                const res = await MessageModel.createMessage(content);
                ctx.response.status = 200;
                ctx.body = {
                    code: 0,
                    message: '发送成功',
                    data: {
                        id: res.id,
                        content: res.content,
                        createdAt: res.createdAt
                    }
                }
            }catch(err){
                ctx.response.status = 412;
                ctx.body = {
                    code: 412,
                    message: '发送失败',
                    data: err
                }
            }
        }else {
            ctx.response.status = 416;
            ctx.body = {
                code: 200,
                message: '参数错误'
            }
        }
    }
}

module.exports = MessageController;