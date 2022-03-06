let token
module.exports = {
  setToken: function (newToken) {
    token = newToken
  },
  getToken: function () {
    return token
  }
}
