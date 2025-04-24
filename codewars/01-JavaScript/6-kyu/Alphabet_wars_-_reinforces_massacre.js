/**
 * Alphabet wars - reinforces massacre
 * https://www.codewars.com/kata/593e2077edf0d3e2d500002d/train/javascript
 *
 */

function alphabetWar([field, ...reinforces], airstrikes) {
  for (let i = 0; i < airstrikes.length; i++) {
    const airstrike = airstrikes[i]

    for (let j = 0; j < airstrike.length; j++) {
      if (airstrike[j] === '*') field = strikeField(field, j)
    }

    field = reinforceField(field, reinforces)
  }

  return field
}

function strikeField(field, ind) {
  const strikedField = []

  for (let i = 0; i < field.length; i++) {
    if (i - 1 === ind || i === ind || i + 1 === ind) strikedField.push('_')
    else strikedField.push(field[i])
  }

  return strikedField.join('')
}

function reinforceField(field, reinforces) {
  return field.replace(/./g, (m, i) => {
    if (m !== '_') return m

    for (let j = 0; j < reinforces.length; j++) {
      const reinforce = reinforces[j]

      if (reinforce[i] !== '_') {
        reinforces[j] = reinforce.slice(0, i) + '_' + reinforce.slice(i + 1)
        return reinforce[i]
      }
    }

    return '_'
  })
}
