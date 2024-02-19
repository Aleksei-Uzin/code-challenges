/**
 * Is this my tail?
 * https://www.codewars.com/kata/56f695399400f5d9ef000af5/train/typescript
 *
 */

export function correctTail(body: string, tail?: string): boolean {
  if (!tail) return false

  const sub = body.substring(body.length - tail.length)

  return sub === tail
}
