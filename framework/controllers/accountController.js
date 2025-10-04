import { http } from '../services/http.js'
import { endpoints } from '../config/index.js'

export const account = {
  createUser: ({ userName, password }) => http.post(endpoints.createUser, { userName, password }),

  generateToken: ({ userName, password }) => http.post(endpoints.generateToken, { userName, password }),

  authorized: ({ userName, password }) => http.post(endpoints.authorized, { userName, password }),

  getUser: (id, token) => http.get(endpoints.user(id), { headers: { Authorization: `Bearer ${token}` } }),

  deleteUser: (id, token) => http.delete(endpoints.user(id), { headers: { Authorization: `Bearer ${token}` } })
}
