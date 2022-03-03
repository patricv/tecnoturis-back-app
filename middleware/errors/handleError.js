module.exports = (error, request, response) => {
  console.error(error)
  response.status(500).json({ error: 'Internal server error' })
}
