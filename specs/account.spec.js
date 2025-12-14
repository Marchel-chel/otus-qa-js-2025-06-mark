import { account } from '../framework/controllers/accountController.js'
import { validUser, badPasswordUser } from '../framework/fixtures/user.js'

describe('BookStore: Account API via services', () => {
  test('Успешная авторизация', async () => {
    const user = validUser()
    const created = await account.createUser(user)
    expect(created.status).toBe(201)

    const tokenRes = await account.generateToken(user)
    expect(tokenRes.status).toBe(200)

    const authRes = await account.authorized(user)
    expect(authRes.status).toBe(200)
  }, 20000)

  test('Успешное удаление пользователя после авторизации', async () => {
    const user = validUser()
    const created = await account.createUser(user)
    expect(created.status).toBe(201)

    const tokenRes = await account.generateToken(user)
    const token = tokenRes.data.token

    const delRes = await account.deleteUser(created.data.userID, token)
    expect([200, 204]).toContain(delRes.status) // сервис иногда возвращает 200 или 204
  })

  test('Получение информации о пользователе', async () => {
    const user = validUser()
    const created = await account.createUser(user)
    expect(created.status).toBe(201)

    const tokenRes = await account.generateToken(user)
    const token = tokenRes.data.token

    const getRes = await account.getUser(created.data.userID, token)
    expect(getRes.status).toBe(200)
  })

  test('Авторизация: ошибка при неверном пароле', async () => {
    const user = badPasswordUser()
    const res = await account.createUser(user)
    expect(res.status).toBe(400)
  })
})
