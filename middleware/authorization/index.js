const jwt = require('jsonwebtoken')
module.exports = (request, response, next) => {
  const authorization = request.get('Authorization')
  const token = authorization ? authorization.split(' ')[1] : null
  let decodedToken
  if (token) {
    decodedToken = jwt.verify(token, process.env.SECRET)
  }
  if (!token || !decodedToken) {
    response.status(401).json({ error: 'Token missing or invalid' })
  } else {
    const userId = { id: decodedToken.id }
    request.userId = userId
    next()
  }
}
