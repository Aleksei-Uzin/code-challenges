/**
 * Competitive eating scoreboard
 * https://www.codewars.com/kata/571d2e9eeed4a150d30011e7/train/javascript
 *
 */

const scoreboard = whoAteWhat => {
  return whoAteWhat
    .map(({ name, chickenwings, hamburgers, hotdogs }) => ({
      name,
      score: chickenwings * 5 + hamburgers * 3 + hotdogs * 2,
    }))
    .sort(
      ({ name: nameA, score: scoreA }, { name: nameB, score: scoreB }) =>
        scoreB - scoreA || nameA.localeCompare(nameB)
    )
}
