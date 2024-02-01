/**
 * Algorithmic predicament- Bug Fixing #9
 * https://www.codewars.com/kata/55d3b1f2c1b2f0d3470000a9/train/javascript
 *
 */

function highestAge(group1, group2) {
  const combGroup = group1.concat(group2)
  const newGroup = []

  for (let i = 0; i < combGroup.length; i++) {
    if (newGroup.indexOfProp('name', combGroup[i].name) === -1)
      newGroup.push(combGroup[i])
    else
      newGroup[newGroup.indexOfProp('name', combGroup[i].name)].age +=
        combGroup[i].age
  }

  newGroup.sort((p, c) => {
    if (c.age > p.age) return 1
    else if (c.age < p.age) return -1

    return p.name.localeCompare(c.name)
  })

  return newGroup[0].name
}

Array.prototype.indexOfProp = function (prop, value) {
  for (let i = 0; i < this.length; i++) {
    if (this[i][prop] === value) return i
  }

  return -1
}
