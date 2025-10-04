import { http } from '../services/http.js'
import { endpoints } from '../config/index.js'

export const books = {
  list: () => http.get(endpoints.books),

  getBookByIsbn: isbn => http.get(endpoints.book(isbn)),

  createBook: (userId, token, isbns) =>
    http.post(
      endpoints.books,
      { userId, collectionOfIsbns: isbns.map(i => ({ isbn: i })) },
      { headers: { Authorization: `Bearer ${token}` } }
    ),

  deleteBook: (userId, token, isbn) =>
    http.delete(endpoints.bookDelete, {
      headers: { Authorization: `Bearer ${token}` },
      data: { userId, isbn }
    }),

  updateBook: (userId, token, isbn, newIsbn) =>
    http.put(endpoints.bookUpdate, { userId, isbn, newIsbn }, { headers: { Authorization: `Bearer ${token}` } })
}
