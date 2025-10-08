import { http } from '../services/http.js'
import { endpoints } from '../config/index.js'

export const books = {
  list: () => http.get(endpoints.books),

  getBookByIsbn: (isbn: any) => http.get(endpoints.book(isbn)),

  createBook: (userId: any, token: any, isbns: any) =>
    http.post(
      endpoints.books,
      { userId, collectionOfIsbns: isbns.map((i: any) => ({
        isbn: i
      })) },
      { headers: { Authorization: `Bearer ${token}` } }
    ),

  deleteBook: (userId: any, token: any, isbn: any) =>
    http.delete(endpoints.bookDelete, {
      headers: { Authorization: `Bearer ${token}` },
      data: { userId, isbn }
    }),

  updateBook: (userId: any, token: any, isbn: any, newIsbn: any) =>
    http.put(endpoints.bookUpdate, { userId, isbn, newIsbn }, { headers: { Authorization: `Bearer ${token}` } })
}
