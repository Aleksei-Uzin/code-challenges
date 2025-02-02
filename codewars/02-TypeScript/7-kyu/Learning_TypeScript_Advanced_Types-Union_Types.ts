/**
 * Learning TypeScript. Advanced Types. Union Types
 * https://www.codewars.com/kata/59182a2f40ef95046400003c/train/typescript
 *
 */

export function join(tokens: string | string[], glue?: string): string {
  return Array.isArray(tokens) ? tokens.join(glue) : tokens
}
