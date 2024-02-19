/**
 * Find an employees role in the company
 * https://www.codewars.com/kata/55c9fb1b407024afe6000055/train/javascript
 *
 */

// employees - preloaded array
const findEmployeesRole = name => {
  const employee = employees.find(
    ({ firstName, lastName }) => name === `${firstName} ${lastName}`
  )

  return employee?.role ?? 'Does not work here!'
}
