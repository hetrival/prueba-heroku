const config = require('./config')
const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.json({"Api":"Esta es primera llamada, primera!"})
});  

app.listen(config.port, () => {
  console.log(`Api ready on ${config.port}`)
});