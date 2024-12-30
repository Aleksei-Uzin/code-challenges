/**
 * Hëävÿ Mëtäl Ümläüts
 * https://www.codewars.com/kata/57d4e99bec16701a67000033/train/javascript
 *
 */

const heavyMetalUmlauts = boringText =>
  boringText.replace(/[aeiouy]/gi, m => {
    switch (m.toLowerCase()) {
      case 'a':
        return m.toLowerCase() === m ? 'ä' : 'Ä'
      case 'e':
        return m.toLowerCase() === m ? 'ë' : 'Ë'
      case 'i':
        return m.toLowerCase() === m ? 'ï' : 'Ï'
      case 'o':
        return m.toLowerCase() === m ? 'ö' : 'Ö'
      case 'u':
        return m.toLowerCase() === m ? 'ü' : 'Ü'
      case 'y':
        return m.toLowerCase() === m ? 'ÿ' : 'Ÿ'
      default:
        return m
    }
  })
