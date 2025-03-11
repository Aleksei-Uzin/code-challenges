/**
 * [BUG] XCOM-401: Hand-held scanner does not recognize hazardous materials
 * https://www.codewars.com/kata/5c6a8b36ca80ec4da319071b/train/javascript
 *
 */

const HazardScanner = {
  isHazardous(B_elerium, B_dilithium) {
    return (
      // bogon number of energy inhibitor is smaller than bogon number of the energy source
      B_elerium > B_dilithium &&
      // difference between bogon numbers of the inhibitor and the energy source is an odd number
      // (i.e. there are unpaired bogons)
      (B_elerium - B_dilithium) % 2 === 1
    )
  },
  getLedColor(B_elerium, B_dilithium) {
    return HazardScanner.isHazardous(B_elerium, B_dilithium)
      ? '#FF0000'
      : '#00FF00'
  },
}
