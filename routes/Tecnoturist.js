const tecnoturistRouter = require('express').Router()
const authorization = require('../middleware/authorization')
const axios = require('axios')
const baseUrl = 'https://dev.tecnoturis.es/api-rest/hotels/api/v1/'
const { getToken } = require('../settings/tecnoturistClient')
const { getTokenFromTecnoturist } = require('../functions/GetToken')

tecnoturistRouter.get('/token', authorization, async (request, response, next) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'

    }
    const { data } = await axios.post(baseUrl + 'auth/login', {
      username: process.env.TECNOTURIST_USER,
      password: process.env.TECNOTURIST_PASSWORD
    }, { headers: headers })
    const { token } = data._data
    return response.send({ token })
  } catch (error) {
    next(error)
  }
})

tecnoturistRouter.get('/hotels', authorization, async (request, response, next) => {
  try {
    const { name, rating } = request.params
    let token = getToken()
    if (!token) {
      token = await getTokenFromTecnoturist()
    }
    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Authorization: `Bearer ${token}`

    }
    const { data } = await axios.get(baseUrl + 'hotels', {
      headers: headers,
      params: { name: name, hotelRating: rating }
    })
    const hotels = data._data
    return response.send({ hotels })
  } catch (error) {
    next(error)
  }
})

tecnoturistRouter.get('/hotel/:id', authorization, async (request, response, next) => {
  const { id } = request.params
  if (!id) {
    return response.status(400).json({ error: 'Bad request' })
  }
  let token = getToken()
  if (!token) {
    token = await getTokenFromTecnoturist()
  }
  try {
    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Authorization: `Bearer ${token}`

    }
    const { data } = await axios.get(baseUrl + 'hotels/' + id, { headers: headers })
    const hotel = data._data
    return response.send({ hotel })
  } catch (error) {
    next(error)
  }
})
module.exports = tecnoturistRouter
