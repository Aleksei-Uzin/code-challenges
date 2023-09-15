/**
 * Number Of Occurrences
 * https://www.codewars.com/kata/52829c5fe08baf7edc00122b/train/javascript
 *
 */

Object.defineProperty(Array.prototype, 'numberOfOccurrences',{ 
  value : function numberOfOccurrences(element) {
    let res = 0
    
    this.forEach(val => {
      val === element ? res += 1 : res
    })

    return res
  }
});
