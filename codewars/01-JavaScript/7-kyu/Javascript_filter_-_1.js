/**
 * Javascript filter - 1
 * https://www.codewars.com/kata/525d9b1a037b7a9da7000905/train/javascript
 *
 */

const searchNames = logins => logins.filter(([name]) => /_$/.test(name))
