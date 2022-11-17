const getResponse = (data, options = {}) => {
  return {
    status: options.status || 'success',
    msg: options.msg || '',
    data
  }
}

module.exports = getResponse
