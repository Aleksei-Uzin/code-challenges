/**
 * Help the Fruit Guy
 * https://www.codewars.com/kata/557af4c6169ac832300000ba/train/javascript
 *
 */

const removeRotten = bagOfFruits =>
  bagOfFruits?.map(val => val.replace(/rotten/, '').toLowerCase()) ?? []
