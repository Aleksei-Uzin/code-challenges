/**
 * Decompose single strand DNA into 3 reading frames
 * https://www.codewars.com/kata/57507369b0b6d1b5a60001b3/train/javascript
 *
 */

const decomposeSingleStrand = singleStrand => {
  const res = []

  for (let i = 0; i < 3; i++) {
    const re = new RegExp('(\\w{3})(?=\\w{' + (3 - i) + '})', 'g')
    const start = singleStrand.slice(0, i)
    const tail = singleStrand.slice(i).replace(re, '$1 ')
    res.push(`Frame ${i + 1}:${start ? ' ' + start : ''} ${tail}`)
  }

  return res.join('\n')
}
