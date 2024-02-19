/**
 * Hello, Name or World!
 * https://www.codewars.com/kata/57e3f79c9cb119374600046b/train/typescript
 *
 */

export function hello(name = ''): string {
  return `Hello, ${
    name
      ? name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase()
      : 'World'
  }!`
}
