/**
 * Coding Meetup #9 - Higher-Order Functions Series - Is the meetup age-diverse?
 * https://www.codewars.com/kata/5829ca646d02cd1a65000284/train/javascript
 *
 */

const isAgeDiverse = list => {
  const count = list.reduce((acc, { age }) => {
    if (age < 20) acc[0] = age
    else if (age < 30) acc[1] = age
    else if (age < 40) acc[2] = age
    else if (age < 50) acc[3] = age
    else if (age < 60) acc[4] = age
    else if (age < 70) acc[5] = age
    else if (age < 80) acc[6] = age
    else if (age < 90) acc[7] = age
    else if (age < 100) acc[8] = age
    else acc[9] = age
    return acc
  }, [])

  return Object.values(count).length === 10
}
