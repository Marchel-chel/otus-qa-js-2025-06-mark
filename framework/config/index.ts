export const BASE_URL = process.env.BOOKSTORE_URL || 'https://bookstore.demoqa.com'

export const endpoints = {
  createUser: '/Account/v1/User',
  generateToken: '/Account/v1/GenerateToken',
  authorized: '/Account/v1/Authorized', // POST { userName, password }
  user: (id: any) => `/Account/v1/User/${id}`, // DELET/GET

  books: '/BookStore/v1/Books', // POST добавить
  book: (isbn: any) => `/BookStore/v1/Book${isbn ? `?ISBN=${isbn}` : ''}`, // GET ?ISBN=...
  bookDelete: '/BookStore/v1/Book', // DELETE
  bookUpdate: '/BookStore/v1/Books' // PUT
}
