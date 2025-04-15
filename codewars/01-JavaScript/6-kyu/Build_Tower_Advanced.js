/**
 * Build Tower Advanced
 * https://www.codewars.com/kata/57675f3dedc6f728ee000256/train/javascript
 *
 */

const towerBuilder = (nFloors, nBlockSz) => {
  const [x, y] = nBlockSz
  const height = nFloors * y
  const tower = []
  let floorSz = 0

  for (let i = 0; i < nFloors; i++) {
    floorSz += i > 0 ? x * 2 : x
    const floor = '*'.repeat(floorSz)

    for (let j = 0; j < y; j++) {
      tower.push(floor)
    }
  }

  for (let i = 0; i < height; i++) {
    const floor = tower[i]
    const space = ' '.repeat((floorSz - floor.length) / 2)
    tower[i] = `${space}${floor}${space}`
  }

  return tower
}

// Best practice
//
// function towerBuilder(nFloors, nBlockSz) {
//   const w = nBlockSz[0], h = nBlockSz[1];
//   const tower = [];

//   for (let floor = 1; floor <= nFloors; floor++) {
//     let stars = '*'.repeat(w * (floor * 2 - 1));
//     let space = ' '.repeat(w * (nFloors - floor));
//     for (let i = 0; i < h; i++) {
//       tower.push(space + stars + space);
//     }
//   }

//   return tower;
// }
