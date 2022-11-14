const mongoose = require('mongoose')
const dotenv = require('dotenv')
const { resolve } = require('path/posix')
const { drop } = require('lodash')
dotenv.config()

mongoose.Promise = global.Promise
mongoose.connect(process.env.CONNECTIONSTRING)

mongoose.connection
  .once('open', () => console.log('Connected!'))
  .on('error', (error) => {
    console.warn('Error: ', error)
  })

beforeEach((done) => {
  mongoose.connection.collections.molds.deleteMany({}).then(() => {
    done()
    resolve()
  })
})
