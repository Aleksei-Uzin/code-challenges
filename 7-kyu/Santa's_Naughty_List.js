/**
 * Santa's Naughty List
 * https://www.codewars.com/kata/5a0b4dc2ffe75f72f70000ef/train/javascript
 *
 */

const findChildren = (santasList, children) => {
  const res = []

  santasList.forEach(name => {
    if(children.includes(name) && !res.includes(name)) res.push(name)
  })
    
  return res.sort()
}
