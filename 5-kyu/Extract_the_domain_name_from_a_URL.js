/**
 * Extract the domain name from a URL
 * https://www.codewars.com/kata/514a024011ea4fb54200004b/train/javascript
 *
 */

const domainName = url => {
  let domain = ''

  if (/^(https?|www)/.test(url)) {
    ;[domain] = url.match(/(?<=\/\/|www\.)(?!www).+?(?=\.)/)
  } else {
    ;[domain] = url.match(/.+?(?=\.)/)
  }

  return domain
}
