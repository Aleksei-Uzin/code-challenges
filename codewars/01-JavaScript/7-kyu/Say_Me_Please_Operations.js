/**
 * Say Me Please Operations
 * https://www.codewars.com/kata/5b5e0c0d83d64866bc00001d/train/javascript
 *
 */
const decode = r => {
  const [num, str] = r.match(/\d+|[a-z]+/g)

  if (num % 2 && num % 13) {
    const abc = Array.from({ length: 26 }, (_, i) =>
      String.fromCharCode(((i * num) % 26) + 97)
    )
    return str.replace(/\w/g, m => {
      const ind = abc.indexOf(m)
      return String.fromCharCode(ind + 97)
    })
  } else {
    return 'Impossible to decode'
  }
}
