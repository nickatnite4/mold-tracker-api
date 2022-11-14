const dotenv = require('dotenv')
dotenv.config()
// const { MongoClient } = require('mongodb')
const mongoose = require('mongoose')

// const client = new MongoClient(process.env.CONNECTIONSTRING)

exports.start = function () {
  return new Promise(async (resolve, reject) => {
    console.log('Attempting to connect to Database...')
    await mongoose.connect(process.env.CONNECTIONSTRING)
    const app = require('./app')
    app.listen(process.env.PORT, () => console.log('Server started.'))
    resolve(console.log('Sucessfully connected to Database'))
  })
}
