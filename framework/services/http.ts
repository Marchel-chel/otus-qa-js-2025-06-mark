import axios from 'axios'
import { BASE_URL } from '../config/index.js'

export const http = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  validateStatus: () => true // не кидать исключение на 4xx/5xx
})

// Простейшие перехватчики — удобно логировать при падениях
http.interceptors.response.use(
  r => r,
  err => Promise.resolve(err.response ?? { status: 0, data: { message: String(err) } })
)
