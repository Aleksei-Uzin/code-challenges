/**
 * Word, char and line count
 * https://www.codewars.com/kata/5286a298f8fc1b7667000c1c/train/javascript
 *
 */

function DocumentParser(reader) {
  this.reader = reader
  this.reset()
}

DocumentParser.prototype.reset = function () {
  this.wordCount = 0
  this.charCount = 0
  this.lineCount = 0
}

DocumentParser.prototype.parse = function () {
  this.reset()
  let prev = ' '

  while (true) {
    const chunk = this.reader.getChunk()
    if (!chunk) break

    for (let c of chunk) {
      if (c === '\n') {
        this.lineCount += 1
        prev = ' '
      } else {
        this.lineCount = this.lineCount || 1
        this.charCount += 1

        if (c !== ' ' && prev === ' ') {
          this.wordCount += 1
        }
        prev = c
      }
    }
  }
}
