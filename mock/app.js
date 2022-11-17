/**
 * mock server
 */
const Koa = require('koa')
const cors = require('@koa/cors')
const router = require('./router')
const logger = require('./middlewares/logger')

const app = new Koa()

// middlewares
app.use(cors())
app.use(logger())
app.use(router.routes()).use(router.allowedMethods())

const port = 3000
app.listen(port, () => console.log(`mock server is running at port ${port}`))
