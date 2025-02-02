/**
 * Who's Online?
 * https://www.codewars.com/kata/5b6375f707a2664ada00002a/train/javascript
 *
 */

const whosOnline = friends => {
  const res = {}

  friends.forEach(({ username: name, status, lastActivity }) => {
    if (status === 'online' && lastActivity > 10)
      res.away ? res.away.push(name) : (res.away = [name])
    else if (status === 'offline')
      res.offline ? res.offline.push(name) : (res.offline = [name])
    else res.online ? res.online.push(name) : (res.online = [name])
  })

  return res
}
