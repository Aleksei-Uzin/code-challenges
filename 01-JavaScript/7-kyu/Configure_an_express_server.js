/**
 * Configure an express server
 * https://www.codewars.com/kata/5696c8b5fddc42058b000032/train/javascript
 *
 */

const solution = () => {
  const express = require('express')
  const app = express()
  app.listen(process.env.PORT, process.env.HOST, () => {})
}
