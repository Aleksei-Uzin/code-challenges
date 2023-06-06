/**
 * 101 Dalmatians - squash the bugs, not the dogs!
 * https://www.codewars.com/kata/56f6919a6b88de18ff000b36/train/javascript
 *
 */

const howManyDalmatians = number => {
  const dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIANS!!!"]

  if(number <= 10) return dogs[0]
  if(number <= 50) return dogs[1]
  if(number < 101) return dogs[2]

  return dogs[3]
}
