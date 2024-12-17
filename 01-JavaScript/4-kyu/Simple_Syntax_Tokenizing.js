/**
 * Simple Syntax Tokenizing
 * https://www.codewars.com/kata/599a0d02755eae7070000079/train/javascript
 *
 */

function tokenise(str) {
  const [regW, regS] = [/[a-z]/i, /[\<\=\>\/!#$%&*+@^_.,;-]/]
  const tokens = []
  let i = 0

  try {
    while (i < str.length) {
      const token = str[i]

      if (token === ')') {
        throw Error
      } else if (regW.test(token)) {
        const { part, n } = getTokens(str, '[a-z]+', i)
        tokens.push(part)
        i += n
      } else if (regS.test(token)) {
        const { part, n } = getTokens(str, '[\\<\\=\\>\\/$!#%&*+@^_.,;-]+', i)
        tokens.push(part)
        i += n
      } else if (token === '(') {
        const { lsInd, subPart } = getSubPart(str, i)
        const subTokens = tokenise(subPart)
        tokens.push(subTokens)
        i += lsInd - i
      } else {
        i += 1
      }
    }
  } catch {
    return null
  }

  return tokens
}

function getTokens(str, regStr, ind) {
  const reg = new RegExp(`(?<=^.{${ind}})${regStr}`, 'i')
  const [part] = str.match(reg)
  const n = part.length

  return { part, n }
}

function getSubPart(str, stInd) {
  let [lsInd, a, b] = [stInd, 0, 0]

  for (; lsInd < str.length; lsInd++) {
    const token = str[lsInd]

    if (a > 0 && a === b) break
    if (token === '(') a++
    if (token === ')') b++
  }

  if (a !== b) throw Error

  const subPart = str.substring(stInd + 1, lsInd - 1)

  return { subPart, lsInd }
}
