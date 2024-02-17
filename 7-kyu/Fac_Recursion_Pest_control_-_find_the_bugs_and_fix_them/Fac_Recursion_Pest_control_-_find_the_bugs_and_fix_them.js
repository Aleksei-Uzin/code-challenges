function facRecursion(value) {
  if (value < 0) return 0
  if (value === 1 || value === 0) return 1

  return value * facRecursion(value - 1)
}
