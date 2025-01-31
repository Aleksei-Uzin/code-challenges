/**
 * Kooka-Counter
 * https://www.codewars.com/kata/58e8cad9fd89ea0c6c000258/train/javascript
 *
 */

const kookaCounter = laughing => (laughing.match(/(Ha)+|(ha)+/g) || []).length
