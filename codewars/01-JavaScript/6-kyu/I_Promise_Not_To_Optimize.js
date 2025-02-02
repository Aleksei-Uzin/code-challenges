/**
 * I Promise Not To Optimize
 * https://www.codewars.com/kata/58d014421c694f71630000bc/train/javascript
 *
 */

async function antiOptimizeAsync(task) {
  await new Promise(resolve => setTimeout(resolve, 1900))
  return task()
}
