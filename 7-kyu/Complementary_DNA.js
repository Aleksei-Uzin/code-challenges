/**
 * Complementary DNA
 * https://www.codewars.com/kata/554e4a2f232cdd87d9000038/train/javascript
 *
 */

const DNAStrand = dna => {
  const DNASymbolsComplement = { A: 'T', C: 'G', G: 'C', T: 'A' }
  let res = ''

  for (let symbol of dna) {
    res += DNASymbolsComplement[symbol]
  }

  return res
}
