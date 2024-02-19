/**
 * String Templates - Bug Fixing #5
 * https://www.codewars.com/kata/55c90cad4b0fe31a7200001f/train/typescript
 *
 */

export function buildString(...template: string[]): string {
  return `I like ${template.join(', ')}!`
}
