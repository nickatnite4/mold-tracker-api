const express = require('express')
const app = express()
const mongoose = require('mongoose')
const db = require('./db')

const dotenv = require('dotenv')
dotenv.config()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// Database connection

async function connectToDB() {
  await db.start()
}

connectToDB()

app.use('/api', require('./router-api'))

module.exports = app
