/**
 * Driving Licence
 * https://www.codewars.com/kata/586a1af1c66d18ad81000134/train/javascript
 *
 */

const driver = data => {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]
  const [name, midname, surname, birthday, gender] = data
  const [day, month, year] = birthday.split('-')
  const monthN = months.findIndex(item => month.includes(item)) + 1

  const part1 = surname.slice(0, 5).toUpperCase().padEnd(5, 9)
  const part2 = year[2]
  const part3 = gender === 'F' ? monthN + 50 : String(monthN).padStart(2, 0)
  const part4 = day
  const part5 = year[3]
  const part6 = `${name[0]}${midname[0] || 9}`
  const part7 = 9
  const part8 = 'AA'

  return [part1, part2, part3, part4, part5, part6, part7, part8].join('')
}

console.log(driver(['Addison', 'Clara', 'Richmond', '21-Aug-1977', 'F']))
