/**
 * Isograms
 * https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/javascript
 * 
 */

const isIsogram = str => [...new Set(str.toLowerCase())].join('') === str.toLowerCase()

// Best practice
//
// function isIsogram(str){
// 	return new Set(str.toUpperCase()).size == str.length;
// }
