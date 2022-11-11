let express = require('express')
let app = require('./app')
let supertest = require('supertest')
const { describe } = require('yargs')
const { default: expect } = require('expect')

describe('POST /api/create-mold', () => {
  test('should respond with a 200 status code', () => {
    const response = request(app).post('/api/create-mold').send({
      moldnumber: 'N-4555',
      weight: '1000',
      cavities: '5',
      weightUnits: 'lbs',
    })
    expect(response.statusCode).toBe(200)
  })
})
