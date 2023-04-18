import axios, { AxiosError, AxiosRequestConfig } from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:5000',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
})

export default api
