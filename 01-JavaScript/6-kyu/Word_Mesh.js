/**
 * Word Mesh
 * https://www.codewars.com/kata/5c1ae703ba76f438530000a2/train/javascript
 *
 */

const wordMesh = arr => {
  const reg = /(\w+\b) \1/
  let res = ''

  for (let i = 0; i < arr.length - 1; i++) {
    const seq = `${arr[i]} ${arr[i + 1]}`

    if (!reg.test(seq)) return 'failed to mesh'
    else res += reg.exec(seq)[1]
  }

  return res
}
