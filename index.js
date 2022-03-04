require('dotenv').config()
require('./settings/mongo')
const express = require('express')
const app = express()
const PORT = process.env.PORT || 80
const cors = require('cors')
const users = require('./routes/Users')
const notFound = require('./middleware/errors/notFound')
const errorHandler = require('./middleware/errors/handleError')

app.use(cors())
app.use(express.json())
app.use('/users', users)
app.use(notFound)
app.use(errorHandler)

const server = app.listen(PORT, () => {
  console.log(`Server listening on PORT: ${PORT}`)
})

module.exports = { app, server }
