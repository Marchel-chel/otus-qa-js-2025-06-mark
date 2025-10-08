import { http } from '../services/http.js'
import { endpoints } from '../config/index.js'

export const account = {
  createUser: ({
    userName,
    password
  }: any) => http.post(endpoints.createUser, { userName, password }),

  generateToken: ({
    userName,
    password
  }: any) => http.post(endpoints.generateToken, { userName, password }),

  authorized: ({
    userName,
    password
  }: any) => http.post(endpoints.authorized, { userName, password }),

  getUser: (id: any, token: any) => http.get(endpoints.user(id), { headers: { Authorization: `Bearer ${token}` } }),

  deleteUser: (id: any, token: any) => http.delete(endpoints.user(id), { headers: { Authorization: `Bearer ${token}` } })
}
