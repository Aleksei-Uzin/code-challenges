/**
 * KanaKonverter I
 * https://www.codewars.com/kata/574e96deff5b0ab00a000672/train/javascript
 *
 */

const vowels = (input, output) => {
  const dict = {
    romaji: 'aeiou',
    hiragana: 'あえいおう',
    katakana: 'アエイオウ',
  }

  return input.replace(/./g, m => {
    for (let [key, val] of Object.entries(dict)) {
      const ind = val.indexOf(m.toLowerCase())
      if (key !== output && ind > -1) return dict[output][ind]
    }

    return m
  })
}
