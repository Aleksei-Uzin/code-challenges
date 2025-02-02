/**
 * Baby shark lyrics generator
 * https://www.codewars.com/kata/5d076515e102162ac0dc514e/train/javascript
 *
 */

const babySharkLyrics = () =>
  ['Baby', 'Mommy', 'Daddy', 'Grandma', 'Grandpa', "Let's go hunt"].reduce(
    (a, b, c) => {
      let d = `${b}${5 > c ? ' shark' : ''}`,
        e = `${d},${' doo'.repeat(6)}\n`
      return (a += `${e.repeat(3)}${d}!\n`)
    },
    ''
  ) + 'Run away,\u2026'
