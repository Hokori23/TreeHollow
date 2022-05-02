const MessageModel = require("../module/message");

class MessageController {
    /**
     * 接收信息
     * @param ctx
     * @returns {Promise.<void>}
     */
    static async getMessages(ctx, next){
        //接收客服端
        const { page = 1, capacity = 10 } = ctx.query;
        const pageIndex = Number(page);
        const pageSize = Number(capacity);
        if(pageIndex && pageSize){
            try{
                //使用刚刚创建的文章ID查询文章详情，且返回文章详情信息
                const res = await MessageModel.getMessages(pageIndex, pageSize);
                ctx.response.status = 200;
                ctx.body = {
                    code: 0,
                    message: '获取消息记录成功',
                    data: {
                        total: res.count,
                        message: res.rows
                    }
                }
            }catch(err){
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
        let { content } = ctx.query;
        if (content) {
            try{
                // 查询文章详情模型
                await MessageModel.createMessage(content);
                ctx.response.status = 200;
                ctx.body = {
                    code: 0,
                    message: '发送成功',
                }
            }catch(err){
                ctx.response.status = 412;
                ctx.body = {
                    code: 412,
                    message: '发送失败',
                    data
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