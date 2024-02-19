/**
 * Well of Ideas - Easy Version
 * https://www.codewars.com/kata/57f222ce69e09c3630000212/train/typescript
 *
 */

export function well(x: string[]): string {
  const goodIdeas = x.filter(item => item === 'good').length

  if (goodIdeas === 0) return 'Fail!'
  if (goodIdeas <= 2) return 'Publish!'
  else return 'I smell a series!'
}
