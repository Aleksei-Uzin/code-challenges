/**
 * Strip Url Params
 * https://www.codewars.com/kata/51646de80fd67f442c000013/train/javascript
 *
 */

const stripUrlParams = (url, paramsToStrip = []) => {
  const repsParams = /(\w+=)(.*)(&\1\w+)/

  while (repsParams.test(url)) {
    url = url.replace(repsParams, '$1$2')
  }

  for (let param of paramsToStrip) {
    url = url.replace(new RegExp(`(&|\\?)${param}=\\w+`), '')
  }

  return url
}
