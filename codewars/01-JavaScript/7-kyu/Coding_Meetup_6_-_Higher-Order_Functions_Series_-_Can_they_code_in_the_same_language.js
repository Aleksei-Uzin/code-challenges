/**
 * Coding Meetup #6 - Higher-Order Functions Series - Can they code in the same language?
 * https://www.codewars.com/kata/58287977ef8d4451f90001a0/train/javascript
 *
 */

const isSameLanguage = list => {
  const { language: current } = list.at(0)
  
  return list.every(({ language }) => language === current)
}
