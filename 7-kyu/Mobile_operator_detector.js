/**
 * Mobile operator detector
 * https://www.codewars.com/kata/55f8ba3be8d585b81e000080/train/javascript
 *
 */

const detectOperator = a => {
  switch (a.toString().slice(1, 4)) {
    case '039':
      return 'Golden Telecom'
    case '050':
    case '066':
    case '095':
    case '099':
      return 'MTS'
    case '063':
    case '093':
      return 'Life:)'
    case '067':
    case '096':
    case '097':
    case '098':
      return 'Kyivstar'
    case '068':
      return 'Beeline'
    default:
      return 'no info'
  }
}
