/**
 * What a "Classy" Song
 * https://www.codewars.com/kata/6089c7992df556001253ba7d/train/javascript
 *
 */

class Song {
  #listeners = []

  constructor(title, artist) {
    this.title = title
    this.artist = artist
  }

  howMany(listeners) {
    let n = 0

    for (let listener of listeners) {
      const newlistener = listener.toLowerCase()

      if (!this.#listeners.includes(newlistener)) {
        this.#listeners.push(newlistener)
        n++
      }
    }

    return n
  }
}
