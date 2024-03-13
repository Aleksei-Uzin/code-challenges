/**
 * HTML Generator
 * https://www.codewars.com/kata/54eecc187f9142cc4600119e/train/javascript
 *
 */

class HTMLGen {
  #getContent = tag => str => `<${tag}>${str}</${tag}>`

  a(str) {
    return this.#getContent('a')(str)
  }
  b(str) {
    return this.#getContent('b')(str)
  }
  p(str) {
    return this.#getContent('p')(str)
  }
  body(str) {
    return this.#getContent('body')(str)
  }
  div(str) {
    return this.#getContent('div')(str)
  }
  span(str) {
    return this.#getContent('span')(str)
  }
  title(str) {
    return this.#getContent('title')(str)
  }
  comment(str) {
    return `<!--${str}-->`
  }
}
