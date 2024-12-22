/**
 * UriBuilder
 * https://www.codewars.com/kata/51eead3461ccf7db04000017/train/javascript
 *
 */

class UriBuilder {
  constructor(uri) {
    const [base, queryStr] = uri.split('?')
    this.base = base
    this.params = {}

    if (queryStr) {
      queryStr.split('&').forEach(param => {
        const [key, value] = param.split('=')
        this.params[key] = decodeURIComponent(value)
      })
    }
  }

  build() {
    const paramsArr = Object.entries(this.params).map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    )

    return `${this.base}?${paramsArr.join('&')}`
  }
}
