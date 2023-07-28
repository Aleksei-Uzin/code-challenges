/**
 * Schrödinger's Boolean
 * https://www.codewars.com/kata/5a5f9f80f5dc3f942b002309/train/javascript
 *
 */

const omnibool = {
  value: true,
  valueOf: () => this.value = !this.value,
}
