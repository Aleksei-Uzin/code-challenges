/**
 * Square Pi's
 * https://www.codewars.com/kata/5cd12646cf44af0020c727dd/train/javascript
 *
 */

const squarePi = digits => {
  const pi =
    '31415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679'
  const sum = [...pi.slice(0, digits)].reduce((acc, n) => acc + n ** 2, 0)

  return Math.ceil(Math.sqrt(sum))
}
