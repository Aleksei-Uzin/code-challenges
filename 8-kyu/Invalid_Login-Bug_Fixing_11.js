/**
 * Invalid Login - Bug Fixing #11
 * https://www.codewars.com/kata/55e4c52ad58df7509c00007e/train/javascript
 *
 */

const validate = (username, password) => {
  const isValidPass = password.includes('||') || password.includes('//')
  
  return !isValidPass
    ? new Database().login(username, password)
    : 'Wrong username or password!'
}
