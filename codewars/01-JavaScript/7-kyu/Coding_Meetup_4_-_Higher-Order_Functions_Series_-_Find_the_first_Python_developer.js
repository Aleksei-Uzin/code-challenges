/**
 * Coding Meetup #4 - Higher-Order Functions Series - Find the first Python developer
 * https://www.codewars.com/kata/5827bc50f524dd029d0005f2/train/javascript
 *
 */

const getFirstPython = list => {
  const index = list.findIndex(({ language }) => language === 'Python')
  
  if(index === -1) return 'There will be no Python developers'
  
  const { firstName, country } = list.at(index)
  
  return `${firstName}, ${country}`
}
