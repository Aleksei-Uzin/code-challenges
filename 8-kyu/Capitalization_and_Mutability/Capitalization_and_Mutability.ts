export function capitalizeWord(word: string): string {
  word = word[0].toUpperCase() + word.slice(1)

  return word
}
