/**
 * Coding Meetup #2 - Higher-Order Functions Series - Greet developers
 * https://www.codewars.com/kata/58279e13c983ca4a2a00002a/train/javascript
 *
 */

const greetDevelopers = list => list.map(dev => {
  const { firstName: first, language: lang } = dev

  return { ...dev, greeting: `Hi ${first}, what do you like the most about ${lang}?` }
})
