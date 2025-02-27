/**
 * Talk to an array
 * https://www.codewars.com/kata/5819f2bdf3101966de0000a3/train/javascript
 *
 */

const talkingAbout = what => {
  if (!Array.isArray(what)) return 'What?'
  if (!what.length) return 'Nothing here!'

  let isEverythingOk = true
  let isNiceToMeetYou = false
  let isFull = true
  let waitCalc = 0
  let girlCalc = 0
  let childCalc = 0
  let hasProblem = 'No problem!'

  for (let i = 0; i < what.length; i++) {
    const val = what[i]

    if (isEverythingOk && !/^ok$/i.test(val)) isEverythingOk = false
    if (isFull && /^[^f]/i.test(val)) isFull = false
    if (/^waiting$/i.test(val)) waitCalc += 1
    if (/^girl$/i.test(val)) girlCalc += 1
    if (/^child$/i.test(val)) childCalc += 1
    if (/^myjinxin$/i.test(val)) return 'Really handsome!'
    if (/^problem$/i.test(val)) hasProblem = 'Array has problem!'
    if (!isNiceToMeetYou && /nice/i.test(val)) {
      const prev = /you/i.test(what[i - 1])
      const next = /you/i.test(what[i + 1])
      isNiceToMeetYou = prev || next
    }
  }

  if (isEverythingOk) return 'Everything is OK!'
  else if (isNiceToMeetYou) return 'Nice to meet you!'
  else if (waitCalc === 4 && girlCalc) return 'Waiting for a girl!'
  else if (childCalc) return `We have ${childCalc} children!`
  else if (isFull) return 'Array is full!'
  else return hasProblem
}
