/**
 * Unix command line `ls -l` extract the file type.
 * https://www.codewars.com/kata/5822b65bb81f702016000026/train/javascript
 *
 */

const linuxType = fileAttribute => {
  switch (fileAttribute[0]) {
    case '-':
      return 'file'
    case 'd':
      return 'directory'
    case 'l':
      return 'symlink'
    case 'c':
      return 'character_file'
    case 'b':
      return 'block_file'
    case 'p':
      return 'pipe'
    case 's':
      return 'socket'
    case 'D':
      return 'door'
  }
}
