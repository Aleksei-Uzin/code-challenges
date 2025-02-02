/**
 * Personalising Spammy Marketing Emails
 * https://www.codewars.com/kata/57e402969cb1193746000744/train/javascript
 *
 */

const personalise = (campaign, person) =>
  campaign.replace(/<[A-Z\s]+>/g, m => {
    const key = m.slice(1, -1).toLowerCase().replace(/ /, '_')
    return person[key]
  })
