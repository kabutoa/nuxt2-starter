const getResponse = require('../utils/response')
const infoData = require('./api/info')
const redeemData = require('./api/redeem')

const apiController = {
  info() {
    return getResponse(infoData)
  },
  redeem() {
    return getResponse(redeemData)
  },
}

module.exports = apiController
