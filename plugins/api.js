export default ({ app: { $request } }, inject) => {
  inject('api', {
    /**
     * 获取语言列表
     */
    getLangList() {
      return $request.get('/lang/list')
    },
    /**
     *
     * @param {string} path 路径
     * @param {string} lang 语言名称
     */
    getConfigInfo(params) {
      return $request.get('/config/info', params)
    },
  })
}
