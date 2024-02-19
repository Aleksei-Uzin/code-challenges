/**
 * Javascript Namespacing
 * https://www.codewars.com/kata/524c6a2e55025e3fba00020f/train/javascript
 *
 */

// MyNamespace is provided
MyNamespace.MyClass = function (greeting) {
  this.greeting = greeting
  this.sayHello = function () {
    return this.greeting
  }
}
