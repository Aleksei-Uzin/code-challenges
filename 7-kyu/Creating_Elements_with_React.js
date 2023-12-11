/**
 * Creating Elements with React
 * https://www.codewars.com/kata/55aac03755b0264947000138/train/javascript
 *
 */

const React = require('react')

function createElement(content, tag = 'div', props = null) {
  return React.createElement(tag, props, content)
}

function createUnorderedList(list) {
  const elements = list.map(item =>
    React.createElement('li', { key: item }, item)
  )

  return createElement(elements, 'ul')
}
