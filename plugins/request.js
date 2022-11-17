export default ({ app: { $axios } }, inject) => {
  const requestList = {}
  const methods = ['get', 'post']
  methods.forEach((method) => {
    const dataKey = method === 'get' ? 'params' : 'data'
    requestList[method] = (url, data) =>
      $axios({
        method,
        url,
        [dataKey]: data,
      })
  })
  inject('request', requestList)
}
