/**
 * Decompose double strand DNA into 6 reading frames
 * https://www.codewars.com/kata/57519060f2dac7ec95000c8e/train/javascript
 *
 */

const decomposeDoubleStrand = doubleStrand => {
  const obj = { A: 'T', G: 'C', T: 'A', C: 'G' }
  const reverseDna = doubleStrand
    .split('')
    .map(val => obj[val])
    .reverse()
    .join('')
  const frame1 = []
  const frame2 = []

  for (let i = 0; i < 6; i++) {
    i < 3
      ? frame1.push(`Frame ${i + 1}:${getFrame(doubleStrand, i)}`)
      : frame2.push(`Reverse Frame ${i - 2}:${getFrame(reverseDna, i - 3)}`)
  }

  return frame1.join('\n') + '\n\n' + frame2.join('\n')

  function getFrame(dna, i) {
    const re = new RegExp('(\\w{3})(?=\\w{' + (3 - i) + '})', 'g')
    const start = dna.slice(0, i)
    const tail = dna.slice(i).replace(re, '$1 ')

    return `${start ? ' ' + start : ''} ${tail}`
  }
}
