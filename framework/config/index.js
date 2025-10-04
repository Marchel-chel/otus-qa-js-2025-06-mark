export const BASE_URL = process.env.BOOKSTORE_URL || 'https://bookstore.demoqa.com'

export const endpoints = {
  createUser: '/Account/v1/User',
  generateToken: '/Account/v1/GenerateToken',
  authorized: '/Account/v1/Authorized', // POST { userName, password }
  user: id => `/Account/v1/User/${id}` // DELET/GET
}
