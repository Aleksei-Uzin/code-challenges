/**
 * Youtube URL
 * https://www.codewars.com/kata/58a0697ef636cac09c000014/train/javascript
 *
 */

const makeYoutubeLink = str =>
  `https://www.youtube.com/embed/${/\w+$/.exec(str)[0]}`
