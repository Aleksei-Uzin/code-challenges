/**
 * Remove HTML tags using regexp
 * https://www.codewars.com/kata/58488e89cc8feac6cb000941/train/javascript
 *
 */

const reg = /\<\/?[a-z]+[1-6]?[\s\w\=\'\"\#\/\.]*\>/g

// Best practice
//
// var reg = /<.+?>/g
