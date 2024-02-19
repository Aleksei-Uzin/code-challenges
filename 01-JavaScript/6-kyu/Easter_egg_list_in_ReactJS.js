/**
 * Easter egg list in ReactJS
 * https://www.codewars.com/kata/5a95947f4a6b342636000173/train/javascript
 *
 */

import React from 'react'

export const EggList = ({ eggs }) => (
  <ul>
    {eggs.map((egg, i) => (
      <EasterEgg key={i} name={egg} />
    ))}
  </ul>
)

export const EasterEgg = ({ key, name }) => <li key={key}>{name}</li>
