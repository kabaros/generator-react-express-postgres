const API_URL = process.env.REACT_APP_API_URI || '/'
const axios = require('axios')
const instance = axios.create({
  baseURL: API_URL
})

export const getStatus = () => {
  return instance.get('api/status').then(res => res.data)
}

export const postUser = (email, password, name, city, postcode) => {
  return instance.post('/api/users', { email, password, name, city, postcode })
}

export const getUserProfile = () => {
  return instance.get('/user/profile')
}
export const loginUser = async (email, password) => {
  const { data } = await instance.post('/auth/login', { email, password })
  localStorage.setItem('jwtToken', data.token)
  axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`
  return data.token
}
