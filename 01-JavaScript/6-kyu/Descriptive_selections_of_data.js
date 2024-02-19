/**
 * Descriptive selections of data
 * https://www.codewars.com/kata/529875459ce954d6a800026c/train/javascript
 *
 * Instructions:
 * Fill in the functions with the help of the provided methods only, i.e. just compose with them:
 * rest(), map(), first(), second(), third(), zip()
 *
 * Example:
 * return map(table, second)
 *
 * Description:
 * rest([5, 4, 3, 2, 1])
 *  Should return: [4, 3, 2, 1]
 *
 * map([1, 2, 3], function(num){ return num * 3; })
 *  Should return: [3, 6, 9]
 *
 * first([5, 4, 3, 2, 1]) // second, third ...
 *  Should return: 5
 *
 * zip(['moe', 'larry', 'curly'], [30, 40, 50], [true, false, false])
 *  Should return: [["moe", 30, true], ["larry", 40, false], ["curly", 50, false]]
 *
 * Data:
 * Given the following data: it will ALWAYS be this data structure:
 *  [
 *    ['name', 'age', 'voiced by'],
 *    ['Peter', '37', 'MacFarlane'],
 *    ['Lois', '31', 'Borstein'],
 *  ]
 *
 */

function selectNames(table) {
  return map(rest(table), first)
}

function selectVoices(table) {
  return map(rest(table), third)
}

function selectNamesAndVoices(table) {
  const names = selectNames(table)
  const voices = selectVoices(table)
  return zip(names, voices)
}
