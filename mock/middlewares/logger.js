const chalk = require('chalk')
const log = console.log

const logger = () => async (ctx, next) => {
  const start = Date.now()
  await next()
  const ms = Date.now() - start
  log(chalk.blue(`${ctx.method} ${ctx.url} - ${ms}ms`))
}

module.exports = logger
