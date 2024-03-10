/**
 * Convert all the cases!
 * https://www.codewars.com/kata/59be8c08bf10a49a240000b1/train/javascript
 *
 */

const changeCase = (identifier, targetCase) => {
  if (
    (/[A-Z]/.test(identifier) && identifier.includes('-')) ||
    (/[A-Z]/.test(identifier) && identifier.includes('_')) ||
    (identifier.includes('-') && identifier.includes('_'))
  )
    return

  const replace = (reg, temp) =>
    identifier.replace(reg, (_, n1, n2) => temp(n1 || n2))

  switch (targetCase) {
    case 'snake':
      return replace(/([A-Z])|-(\w)/g, m => `_${m}`.toLowerCase())
    case 'camel':
      return replace(/-(\w)|_(\w)/g, m => m.toUpperCase())
    case 'kebab':
      return replace(/([A-Z])|_(\w)/g, m => `-${m}`.toLowerCase())
    default:
      return
  }
}
