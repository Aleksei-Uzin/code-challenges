/**
 * Birthday II - Presents
 * https://www.codewars.com/kata/5805f0663f1f9c49be00011f/train/javascript
 *
 */

const present = (x, y) => {
  switch (x) {
    case 'goodpresent': {
      return x.replace(/\w/g, m => String.fromCharCode(m.charCodeAt() + y))
    }
    case 'crap':
    case 'empty': {
      return [...x].sort().join('')
    }
    case 'bang': {
      return [...x].reduce((acc, n) => acc + n.charCodeAt() - y, 0)
    }
    case 'dog': {
      return `pass out from excitement ${y} times`
    }
    default: {
      return 'Take this back!'
    }
  }
}
