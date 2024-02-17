function saleHotdogs(n) {
  if (n < 5) return n * 100

  return n < 10 ? n * 95 : n * 90
}

// Best Practice
//
// function saleHotdogs(n){
//   return n * (n < 5 ? 100 : n < 10 ? 95 : 90);
// }
