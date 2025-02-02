/**
 * Regexp Basics - is it a digit?
 * https://www.codewars.com/kata/567bf4f7ee34510f69000032/train/typescript
 *
 */

interface String {
  digit(): boolean
}

String.prototype.digit = function (this: string): boolean {
  return /^\d$/.test(this)
}
