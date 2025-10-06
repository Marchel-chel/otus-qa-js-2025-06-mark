import { books } from '../controllers/bookController.js'

export async function pickTwoIsbns() {
  const res = await books.list()
  const list = res.data?.books ?? []
  const first = list[0]?.isbn
  const second = list[1]?.isbn
  if (!first || !second) throw new Error('Не смог получить два ISBN из каталога')
  return [first, second]
}
