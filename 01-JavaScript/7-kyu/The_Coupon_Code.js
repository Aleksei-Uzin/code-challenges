/**
 * The Coupon Code
 * https://www.codewars.com/kata/539de388a540db7fec000642/train/javascript
 *
 */

const checkCoupon = (enteredCode, correctCode, currentDate, expirationDate) => {
  const currentTime = new Date(currentDate)
  const expirationTime = new Date(expirationDate)

  return enteredCode === correctCode && currentTime <= expirationTime
}
