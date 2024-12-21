/**
 * Suzuki needs help lining up his students!
 * https://www.codewars.com/kata/5701800886306a876a001031/train/javascript
 *
 */

const lineupStudents = students =>
  students.split(' ').sort((a, b) => {
    const [lenA, lenB] = [a.length, b.length]
    return lenA === lenB ? b.localeCompare(a) : lenB - lenA
  })
