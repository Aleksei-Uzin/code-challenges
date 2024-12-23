/**
 * Price VAT Calculator
 * https://www.codewars.com/kata/5483930b98aa44a34d000e54/train/javascript
 *
 */

class Calculator {
  constructor(vatRate) {
    this.vatRate = 1 + vatRate / 100
  }

  getNet(grossPrice) {
    return this.#fixedRes(grossPrice / this.vatRate)
  }

  getVat(grossPrice) {
    return this.#fixedRes(grossPrice) - this.getNet(grossPrice)
  }

  #fixedRes(res) {
    return +res.toFixed(2)
  }
}
