import { account } from '../framework/controllers/accountController.js'
import { books } from '../framework/controllers/bookController.js'
import { validUser } from '../framework/fixtures/user.js'
import { pickTwoIsbns } from '../framework/fixtures/book.js'

describe('BookStore: Books API via services', () => {
  let user, userId: any, token: any, isbn1: any, isbn2: any

  beforeAll(async () => {
    user = validUser()
    const created = await account.createUser(user)
    expect(created.status).toBe(201)
    userId = created.data.userID

    const tokenRes = await account.generateToken(user)
    expect(tokenRes.status).toBe(200)
    token = tokenRes.data.token
    ;[isbn1, isbn2] = await pickTwoIsbns()
  })

  test('Создание книги (добавление пользователю)', async () => {
    const add = await books.createBook(userId, token, [isbn1])
    expect([200, 201]).toContain(add.status)
  })

  test('Обновление книги (смена ISBN)', async () => {
    // подготовка: добавить первую книгу (если предыдущий тест пропущен)
    await books.createBook(userId, token, [isbn1])

    const upd = await books.updateBook(userId, token, isbn1, isbn2)
    expect(upd.status).toBe(200)
  })

  test('Получение информации о книге', async () => {
    // проверим сразу по двум ISBN
    const cases = [isbn1, isbn2]
    for (const i of cases) {
      const get = await books.getBookByIsbn(i)
      expect(get.status).toBe(200)
    }
  })

  test('Удаление книги у пользователя', async () => {
    // убедимся, что книга у пользователя есть
    await books.createBook(userId, token, [isbn1])
    const del = await books.deleteBook(userId, token, isbn1)
    expect([200, 204]).toContain(del.status)
  })
})
