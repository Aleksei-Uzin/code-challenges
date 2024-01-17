/**
 * SCHEDULE YOUR DA(RRA)Y
 * https://www.codewars.com/kata/581de9a5b7bad5d369000150/train/javascript
 *
 */

const dayPlan = (hours, tasks, duration) => {
  if (tasks === 0) return []

  let availableTime = hours * 60
  const restTime = Math.round((availableTime - duration * tasks) / (tasks - 1))
  const schedule = []

  if (restTime < 0) return "You're not sleeping tonight!"

  while (tasks > 0) {
    schedule.push(duration, restTime)
    tasks--
  }

  schedule.pop()

  return schedule
}
