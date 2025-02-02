/**
 * Parsing Commandline Arguments
 * https://www.codewars.com/kata/55538e3de348a57f7e000076/train/javascript
 *
 */

const args = cmd => cmd.replace(/(^\s*)|(\s*[&;>\|].*)/g, '').split(/\s+/)
