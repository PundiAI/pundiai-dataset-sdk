import axios from 'axios'

const instance = axios.create({
  baseURL: '',
})

instance.interceptors.response.use((response) => {
  if (response.data.code === 200) {
    return Promise.resolve(response.data)
  }
  else {
    return Promise.reject(response.data.code)
  }
}, (error) => {
  return Promise.reject(error)
})

export default instance
