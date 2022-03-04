const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()
const User = require('../models/User')

usersRouter.post('/', async (request, response, next) => {
  const { body } = request
  const { username, password } = body

  if (!username || !password) {
    response.status(400).json({ error: 'Bad request' })
  }

  try {
    const passwordHash = await bcrypt.hash(password, 10)
    const user = new User({
      username,
      password: passwordHash
    })
    const savedUser = await user.save()
    response.status(201).json(savedUser)
  } catch (error) {
    next(error)
  }
})
module.exports = usersRouter
