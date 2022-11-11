const dotenv = require('dotenv')
dotenv.config()
// const { MongoClient } = require('mongodb')
const mongoose = require('mongoose')

// const client = new MongoClient(process.env.CONNECTIONSTRING)

async function start() {
  console.log('Attempting to connect to Database...')
  mongoose.connect(process.env.CONNECTIONSTRING)
  console.log('Sucessfully connected to Database')
  //module.exports = client
  const app = require('./app')
  app.listen(process.env.PORT)
  console.log('Server started listening on PORT: 3000')
}

start()
