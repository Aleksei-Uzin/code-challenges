/**
 * Valid Phone Number
 * https://www.codewars.com/kata/525f47c79f2f25a4db000025/train/javascript
 *
 */

const validPhoneNumber = phoneNumber =>
  /^\(\d{3}\)\s\d{3}-\d{4}$/.test(phoneNumber)
