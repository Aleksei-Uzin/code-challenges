/**
 * Help the bookseller !
 * https://www.codewars.com/kata/54dc6f5a224c26032800005c/train/javascript
 *
 */

const stockList = (books, categories) => {
  if (!books.length) return ''

  const res = []

  for (let item of categories) {
    const list = books.filter(b => b.startsWith(item))
    const sum = list.reduce(
      (acc, val) => acc + parseInt(val.replace(/\D+/, '')),
      0
    )
    res.push(`(${item} : ${sum})`)
  }

  return res.join(' - ')
}
