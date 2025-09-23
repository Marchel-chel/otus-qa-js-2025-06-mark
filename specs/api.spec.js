import axios from 'axios'

const api = axios.create({
  baseURL: 'https://bookstore.demoqa.com',
  validateStatus: () => true,
  timeout: 10000
})

const rand = () => Math.random().toString(36).slice(2, 8)
const baseUser = () => ({
  userName: `user_${rand()}`,
  password: `Qwerty1!${rand()}`
})

async function createUser(user) {
  return api.post('/Account/v1/User', user)
}

async function generateToken(user) {
  return api.post('/Account/v1/GenerateToken', user)
}

describe('BookStore API: Account', () => {
  test('Создание пользователя успешно', async () => {
    const user = baseUser()
    const res = await createUser(user)

    expect(res.data).toHaveProperty('userID')
    expect(res.data).toHaveProperty('username', user.userName)
    expect(res.status).toBe(201)
  })

  test('Создание пользователя с ошибкой: логин уже используется', async () => {
    const user = baseUser()
    const first = await createUser(user)
    expect(first.status).toBe(201)

    const second = await createUser(user)
    expect(second.data).toHaveProperty('message')
    expect(second.status).toBe(406)
  })

  test('Создание пользователя с ошибкой: пароль не подходит', async () => {
    const badUser = { userName: `user_${rand()}`, password: '12345678' }
    const res = await createUser(badUser)

    expect(res.data).toHaveProperty('message')
    expect(res.status).toBe(400)
  })

  test('Генерация токена с ошибкой (неверный пароль)', async () => {
    const user = baseUser()
    const created = await createUser(user)
    expect(created.status).toBe(201)

    const wrong = { ...user, password: 'Wrong1!' }
    const res = await generateToken(wrong)

    expect(res.data.status).toMatch(/Failed/i)
    expect(res.status).toBe(200)
  })

  test('Генерация токена успешно', async () => {
    const user = baseUser()
    const created = await createUser(user)
    expect(created.status).toBe(201)

    const res = await generateToken(user)

    expect(res.status).toBe(200)
    expect(res.data).toHaveProperty('token')
    expect(res.data).toHaveProperty('status')
    expect(res.data.status).toMatch(/Success/i)
  })
})
