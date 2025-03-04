/**
 * Coding 3min : Remove screws I
 * https://www.codewars.com/kata/5710a50d336aed828100055a/train/javascript
 *
 */

const sc = screws => {
  const [sec] = [...screws].reduce(
    ([n, prev], s) => [(n += !prev ? 1 : prev == s ? 2 : 7), s],
    [0, '']
  )

  return sec
}
