/**
 * Exclamation marks series #1: Remove an exclamation mark from the end of string
 * https://www.codewars.com/kata/57fae964d80daa229d000126/train/typescript
 *
 */

export function remove(s: string): string {
  return s.replace(/\!$/, '')
}
