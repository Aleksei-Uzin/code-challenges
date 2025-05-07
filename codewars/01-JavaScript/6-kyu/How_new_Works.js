/**
 * How new Works
 * https://www.codewars.com/kata/525a5b2185a9a4f5670006c1/train/javascript
 *
 */

// MyObject is preloaded constructor function
// function MyObject() {
//   this.myOwnProperty = true
// }

// Implement the functionality of the 'new' operator as if you had the code:
// var myObj = new MyObject();
// but do not use the 'new' operator.
//
// Start with a simple empty Object literal.
const myObj = {}

// myObj.__proto__ = MyObject.prototype
Object.setPrototypeOf(myObj, MyObject.prototype)

MyObject.call(myObj)
