const TIMEOUT = 1000
const BASE_URL =
  process.env.NODE_ENV === 'production' ? '/api' : 'http://localhost:3000/api'

export default function ({ $axios, redirect }) {
  $axios.defaults.timeout = TIMEOUT
  $axios.defaults.baseURL = BASE_URL

  $axios.onRequest((config) => {
    return config
  })

  $axios.onResponse((response) => {
    // response.data.code 业务code判断
    return response.data.data
  })

  $axios.onError((error) => {
    console.log(error, 'axios catched error')
    redirect('/500')
  })
}
