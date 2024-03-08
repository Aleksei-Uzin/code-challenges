/**
 * Stone Pickaxe Crafting
 * https://www.codewars.com/kata/65c0161a2380ae78052e5731/train/javascript
 *
 */

const stonePick = arr => {
  const count = arr.reduce(
    (acc, val) => {
      if (val === 'Cobblestone' || val === 'Sticks') acc[val] += 1
      if (val === 'Wood') acc.Sticks += 4

      return acc
    },
    { Cobblestone: 0, Sticks: 0 }
  )

  return Math.min(~~(count.Cobblestone / 3), ~~(count.Sticks / 2))
}
