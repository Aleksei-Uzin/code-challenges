/**
 * Coding Meetup #5 - Higher-Order Functions Series - Prepare the count of languages
 * https://www.codewars.com/kata/5828713ed04efde70e000346/train/javascript
 *
 */

const countLanguages = list => {
  const langs = {}
  
  list.forEach(({ language }) => {
    langs[language] ? langs[language] += 1 : langs[language] = 1
  })
  
  return langs
}
