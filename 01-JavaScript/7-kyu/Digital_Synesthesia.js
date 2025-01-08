/**
 * Digital Synesthesia
 * https://www.codewars.com/kata/56047bb6bcd785ce75000069/train/javascript
 *
 */

const MusicToColor = music =>
  music
    ? music
        .match(/.{3}/g)
        .map(val =>
          val.replace(
            /./g,
            (m, i) =>
              `${i ? '' : '#'}${m.charCodeAt().toString(16).toUpperCase()}`
          )
        )
    : []
