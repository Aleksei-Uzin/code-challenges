/**
 * Validate the Hash
 * https://www.codewars.com/kata/5a15a2d8c374cbc353000074/train/javascript
 *
 */

const malwareValidate = hashArr =>
  hashArr.reduce((acc, val) => {
    if (/[^a-z0-9]/.test(val)) return acc

    const isNumsValid = val.replace(/\D/g, '').length === 5
    const isLettersValid = val.replace(/[^a-z]/g, '').length === 5

    if (isNumsValid && isLettersValid && !acc.includes(val)) acc.push(val)
    return acc
  }, [])
