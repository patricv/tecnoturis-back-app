const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()
const User = require('../models/User')
const jwt = require('jsonwebtoken')
const secret = process.env.SECRET

usersRouter.post('/register', async (request, response, next) => {
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

usersRouter.post('/login', async (request, response, next) => {
  const { body } = request
  const { username, password } = body

  if (!username || !password) {
    response.status(400).json({ error: 'Bad request' })
  }

  try {
    const user = await User.findOne({ username })
    const isValidPassword = user === null ? false : await bcrypt.compare(password, user.password)
    if (!isValidPassword) {
      response.status(400).json({ error: 'Bad request' })
    }
    const userForToken = {
      id: user._id,
      username: user.username
    }
    const token = jwt.sign(userForToken, secret)
    response.send({ username: user.username, token })
  } catch (error) {
    next(error)
  }
})
module.exports = usersRouter
