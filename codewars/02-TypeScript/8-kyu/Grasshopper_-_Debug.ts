/**
 * Grasshopper - Debug
 * https://www.codewars.com/kata/55cb854deb36f11f130000e1/train/typescript
 *
 */

export function weatherInfo(temp: number): string {
  const c = convertToCelsius(temp)

  if (c >= 0) return c + ' is above freezing temperature'
  else return c + ' is freezing temperature'
}

export function convertToCelsius(temperature: number): number {
  const celsius = Math.round((temperature - 32) * (5 / 9) * 1e5) / 1e5
  return celsius
}
