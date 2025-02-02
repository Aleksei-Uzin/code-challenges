/**
 * The Owls Are Not What They Seem
 * https://www.codewars.com/kata/55aa7acc42216b3dd6000022/train/javascript
 *
 */

const owlPic = text => {
  const plumage = text.toUpperCase().match(/[8WTYUIOAHXVM]/gi)

  return `${plumage.join('')}''0v0''${plumage.reverse().join('')}`
}
