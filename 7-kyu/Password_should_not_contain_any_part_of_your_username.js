/**
 * Password should not contain any part of your username.
 * https://www.codewars.com/kata/5c511d8877c0070e2c195faf/train/javascript
 *
 */

const validate = (username, password) => {
  if (username === '' || password === '') return false

  const bigg = username.length > password.length ? username : password
  const short = bigg === username ? password : username
  const half = Math.ceil(short.length / 2)

  for (let i = 0; i <= half; i++) {
    const part = short.slice(i, half + i)

    if (part.length < half) return true
    if (bigg.includes(part)) return false
  }

  return true
}
