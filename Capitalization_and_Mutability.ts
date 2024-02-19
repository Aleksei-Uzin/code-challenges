/**
 * Capitalization and Mutability
 * https://www.codewars.com/kata/595970246c9b8fa0a8000086/train/typescript
 *
 */

export function capitalizeWord(word: string): string {
  word = word[0].toUpperCase() + word.slice(1)

  return word
}
