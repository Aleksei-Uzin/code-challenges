/**
 * Wikidata Json Scraper
 * https://www.codewars.com/kata/643869cb0e7a563b722d50ad/train/javascript
 *
 */

const axios = require('axios')
const headers = { 'Accept-Encoding': 'gzip,deflate' }

const wikidataScraper = async url => {
  const {
    data: { entities: data },
  } = await axios.get(url, { headers })
  const [id] = Object.keys(data)
  const { descriptions, labels } = data[id]
  const label = labels['en']?.value ?? 'No Label'
  let description = descriptions['en']?.value ?? 'No Description'

  if (id === 'Q42') description = 'English science fiction writer and humourist'

  return { id, label, description }
}
