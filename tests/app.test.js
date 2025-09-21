import { nameIsValid, fullTrim, getTotal } from '../src/app'

describe('nameIsValid', () => {
  test('валидные имена', () => {
    expect(nameIsValid('Ivan')).toBe(true)
    expect(nameIsValid('ab')).toBe(true)
  })

  test('невалидные имена', () => {
    expect(nameIsValid('A')).toBe(false)
    expect(nameIsValid(123)).toBe(false)
    expect(nameIsValid('a b')).toBe(false)
  })
})

describe('fullTrim', () => {
  test('удаляет пробелы', () => {
    expect(fullTrim(' a b c ')).toBe('abc')
    expect(fullTrim('   hello world   ')).toBe('helloworld')
  })

  test('работает с пустыми значениями', () => {
    expect(fullTrim('')).toBe('')
    expect(fullTrim(undefined)).toBe('')
  })
})

describe('getTotal', () => {
  const items = [
    { price: 100, quantity: 1 },
    { price: 50, quantity: 2 }
  ]

  test('подсчитывает сумму без скидки', () => {
    expect(getTotal(items)).toBe(200)
  })

  test('подсчитывает сумму со скидкой', () => {
    expect(getTotal(items, 10)).toBe(180)
  })

  test.each([
    [[], 0, 0],
    [[{ price: 10, quantity: 2 }], 0, 20],
    [[{ price: 10, quantity: 1 }], 50, 5]
  ])('параметризованный тест: %o с %d%% = %d', (items, discount, expected) => {
    expect(getTotal(items, discount)).toBe(expected)
  })

  test('ошибка при некорректной скидке', () => {
    expect(() => getTotal(items, 200)).toThrow()
    expect(() => getTotal(items, -1)).toThrow()
    expect(() => getTotal(items, '10')).toThrow()
  })
})
