/**
 * [BUG] XCOM-388: Mass spectrometer crashes
 * https://www.codewars.com/kata/66001d26a43fba02c5c8adc4/train/javascript
 *
 */

const Spectrometer = {
  getHeaviest(atomicMasses) {
    let max = 0

    for (let mass of atomicMasses) {
      max = mass > max ? mass : max
    }

    return max
  },
}
