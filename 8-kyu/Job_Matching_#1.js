/**
 * Job Matching #1
 * https://www.codewars.com/kata/56c22c5ae8b139416c00175d/train/javascript
 *
 */

function match(candidate, job) {
  const { minSalary: min } = candidate
  const { maxSalary: max } = job
  
  if(!min || !max) throw Error()
  
  return (min * 0.9) <= max
}
