/**
 * Manipulate URL Parameters
 * https://www.codewars.com/kata/524300d5add6f657e20008ff/train/javascript
 *
 */

const addOrChangeUrlParameter = (url, param) => {
  if (param && !url.includes('?')) return `${url}?${param}`

  const [key = ''] = param.split('=')

  return url.includes(key)
    ? url.replace(new RegExp(key + '=.+'), param)
    : `${url}&${param}`
}
