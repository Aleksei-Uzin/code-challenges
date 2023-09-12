/**
 * Coding Meetup #13 - Higher-Order Functions Series - Is the meetup language-diverse?
 * https://www.codewars.com/kata/58381907f8ac48ae070000de/train/javascript
 *
 */

const isLanguageDiverse = list => {
  const res = {}
  let max, min, values
  
  list.forEach(({ language }) => {
    const currCount = res[language] ?? 0
    res[language] = currCount + 1
  })
  
  values = Object.values(res)
  max = Math.max(...values)
  min = Math.min(...values)

  return min * 2 >= max
}
