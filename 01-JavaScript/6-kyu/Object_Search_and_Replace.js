/**
 * Object Search and Replace
 * https://www.codewars.com/kata/5244b0588978473f9500002b/train/javascript
 *
 */

function solution(data, replace) {
  if (!data) return data

  for (let [key, value] of Object.entries(data)) {
    if (typeof data[key] === 'object') {
      data[key] = solution(data[key], replace)
    }

    if (value === 'dynamic') {
      data[key] = replace
    }
  }

  return data
}

const data = {
  foo: 'dynamic',
  bar: {
    baz: ['dynamic'],
  },
  dynamic: true,
}

console.log(solution(data, 'static'))
