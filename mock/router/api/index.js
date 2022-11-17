const Router = require('@koa/router')
const apiController = require('../../controller')

const apiRouter = new Router({
  prefix: '/api',
})

apiRouter.get('/info', (ctx) => {
  ctx.body = apiController.info()
  // ctx.body = {
  //   msg: 'TOAST_LOGIN_FAILED',
  //   status: 'error'
  // }
})

apiRouter.post('/redeem', (ctx) => {
  ctx.body = apiController.redeem()
})

module.exports = apiRouter
