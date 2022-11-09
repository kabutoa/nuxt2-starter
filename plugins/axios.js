export default function ({ $axios, redirect }) {
  $axios.defaults.timeout = 10000
  // $axios.defaults.baseURL = 'xxx'

  $axios.onRequest((config) => {
    // const token = 'xxx'
    // if (token) {
    //   config.headers['token'] = token
    // }
    return config
  })

  $axios.onResponse((response) => {
    // response.data.code 业务code判断
    return response
  })

  $axios.onError((error) => {
    // const code = error.response
    console.log(error)
  })
}
