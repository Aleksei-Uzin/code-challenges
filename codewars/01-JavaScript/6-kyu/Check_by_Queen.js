/**
 * Check by Queen
 * https://www.codewars.com/kata/5a1cae0832b8b99e2900000c/train/javascript
 *
 */

const check = board => {
  const {
    king: { kingLinePos: klp, kingColumnPos: kcp },
    queen: { queenLinePos: qlp, queenColumnPos: qcp },
  } = board.reduce((acc, line, i) => {
    const kingI = line.indexOf('k')
    const queenI = line.indexOf('q')

    if (kingI !== -1) acc.king = { kingLinePos: kingI, kingColumnPos: i }
    if (queenI !== -1) acc.queen = { queenLinePos: queenI, queenColumnPos: i }

    return acc
  }, {})

  if (qlp === klp || qcp === kcp) {
    return true
  } else if (qcp > kcp) {
    const queenDiagonal = qlp > klp ? qlp - (qcp - kcp) : qlp + (qcp - kcp)
    return queenDiagonal === klp
  } else if (qcp < kcp) {
    const queenDiagonal = qlp > klp ? qlp - (kcp - qcp) : qlp + (kcp - qcp)
    return queenDiagonal === klp
  } else {
    return false
  }
}
