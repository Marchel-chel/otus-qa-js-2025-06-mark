const rand = () => Math.random().toString(36).slice(2, 8)

export const validUser = () => ({
  userName: `user_${rand()}`,
  // правила пароля DemoQA: >=8, верх/низ регистр, цифра, спецсимвол
  password: `Qwerty1!${rand()}`
})

export const badPasswordUser = () => ({
  userName: `user_${rand()}`,
  password: '12345678' // заведомо не проходит политику
})
