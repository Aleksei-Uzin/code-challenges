/**
 * Be Concise I - The Ternary Operator
 * https://www.codewars.com/kata/56f3f6a82010832b02000f38/train/javascript
 *
 */

// TODO: Refactor and shorten the function

const describeAge=(a,s="You're a(n)")=>a<13?`${s} kid`:a<18?`${s} teenager`:a<65?`${s} adult`:`${s} elderly`
