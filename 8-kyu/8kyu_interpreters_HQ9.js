/**
 * 8kyu interpreters: HQ9+
 * https://www.codewars.com/kata/591588d49f4056e13f000001/train/javascript
 *
 */

const lyric = (n = 99) => {
  let str = `${n} bottles of beer on the wall, ${n} bottles of beer.\n`

  for(let i = n - 1; i > 1; i--) {
    str = str.concat(
      `Take one down and pass it around, ${i} bottles of beer on the wall.\n`,
      `${i} bottles of beer on the wall, ${i} bottles of beer.\n`
    )
  }

  str = str.concat(
    'Take one down and pass it around, 1 bottle of beer on the wall.\n',
    '1 bottle of beer on the wall, 1 bottle of beer.\n',
    'Take one down and pass it around, no more bottles of beer on the wall.\n',
    'No more bottles of beer on the wall, no more bottles of beer.\n',
    `Go to the store and buy some more, ${n} bottles of beer on the wall.`
  )

  return str
}

const HQ9 = code => {
  switch(code) {
    case 'H': return 'Hello World!'
    case 'Q': return code
    case '9': return lyric()
    default: return
  }
}
