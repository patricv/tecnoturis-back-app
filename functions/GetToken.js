const axios = require('axios')
const baseUrl = 'https://dev.tecnoturis.es/api-rest/hotels/api/v1/'
const { setToken } = require('../functions/GetToken')
module.exports = {
  getTokenFromTecnoturist: async function () {
    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'

    }
    const { data } = await axios.post(baseUrl + 'auth/login', {
      username: process.env.TECNOTURIST_USER,
      password: process.env.TECNOTURIST_PASSWORD
    }, { headers: headers })
    const { token } = data._data
    setToken(token)
    return token
  }
}
