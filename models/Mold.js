const mongoose = require('mongoose')

const moldSchema = new mongoose.Schema({
  moldNumber: {
    type: String,
    required: true,
    immutable: true,
  },
  length: {
    type: Number,
    required: true,
    min: 0.1,
  },
  width: {
    type: Number,
    min: 0.1,
  },
  height: {
    type: Number,
    min: 0.1,
  },
  cavities: {
    type: Number,
    required: true,
    min: 1,
    max: 500,
  },
  units: {
    type: String,
    enum: ['Metric', 'Imperial'],
  },
})

module.exports = mongoose.model('mold', moldSchema)
