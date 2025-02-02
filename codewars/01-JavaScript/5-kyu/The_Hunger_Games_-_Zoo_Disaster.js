/**
 * The Hunger Games - Zoo Disaster!
 * https://www.codewars.com/kata/5902bc7aba39542b4a00003d/train/javascript
 *
 */

const nutrition = {
  antelope: ['lion'],
  bug: ['chicken', 'bear'],
  chicken: ['fox', 'bear'],
  cow: ['lion', 'bear'],
  grass: ['antelope', 'cow', 'sheep'],
  leaves: ['panda', 'bear', 'bug', 'giraffe'],
  sheep: ['fox', 'bear'],
  'big-fish': ['bear'],
  'little-fish': ['big-fish'],
}

const whoEatsWho = zoo => {
  const animals = zoo.split(',')
  const res = [zoo]
  let i = 0

  while (i < animals.length) {
    const animal = animals[i]
    const left = animals[i - 1]
    const right = animals[i + 1]

    if (nutrition[left] && nutrition[left].includes(animal)) {
      res.push(`${animal} eats ${left}`)
      animals.splice(i - 1, 1)
      i -= 2
    } else if (nutrition[right] && nutrition[right].includes(animal)) {
      res.push(`${animal} eats ${right}`)
      animals.splice(i + 1, 1)
    } else {
      i += 1
    }
  }

  return [...res, animals.join(',')]
}

var input = 'fox,bug,chicken,grass,sheep'
var expected = [
  'fox,bug,chicken,grass,sheep',
  'chicken eats bug',
  'fox eats chicken',
  'sheep eats grass',
  'fox eats sheep',
  'fox',
]

whoEatsWho(input)
