/**
 * Learning TypeScript. Basic Types. Type Assertions
 * https://www.codewars.com/kata/5916b952e76dc9cbcb000066/train/typescript
 *
 */

export class SuccessServerResult {
  constructor(public httpCode: number, public resultObject: Object) {}
}

export class ErrorServerResult {
  constructor(public httpCode: number, public message: string) {}
}

export function getResult(result: SuccessServerResult) {
  if (result.httpCode === 200) {
    return result.resultObject
  } else {
    return (result as any as ErrorServerResult).message
  }
}
