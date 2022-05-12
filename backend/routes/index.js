const Router = require('koa-router')
const MessageController = require('../controller/message');

const router = new Router({
  prefix: '/api/v1'
});

// router.get('/', async (ctx, next) => {
//   await ctx.render('index', {
//     title: 'Hello Koa 2!'
//   })
// })

router.get('/get-messages', MessageController.getMessages);

router.post('/send-message', MessageController.sendMessage)

module.exports = router