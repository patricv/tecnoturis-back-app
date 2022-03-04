const mongoose = require('mongoose')
const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASSWORD
const db = process.env.DB
const connectionString = `mongodb+srv://${dbUser}:${dbPassword}@cluster0.le5dx.mongodb.net/${db}?retryWrites=true&w=majority`
mongoose.connect(connectionString).then(() => {
  console.log('Database connected')
}).catch((error) => {
  console.error(error)
})
