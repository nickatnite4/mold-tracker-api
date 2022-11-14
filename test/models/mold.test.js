const Mold = require('../../models/Mold')
const assert = require('assert')
const request = require('supertest')
const supertest = require('supertest')
const app = require('../../app')
const { default: expect } = require('expect')

describe('Creating a document in MongoDB', () => {
  it('Creates a new mold', (done) => {
    const mold = new Mold({ moldNumber: 'N-3333', length: 2222, cavities: 4 })
    mold.save().then(() => {
      console.log(mold)
      assert(!mold.isNew)
      done()
    })
  })
})

describe('Testing API end points for molds collection', () => {
  it('Test API endpoint for creating mold.', async () => {
    const response = await supertest(app)
      .post('/api/create-mold')
      .send({ moldNumber: 'N-3334', length: 2222, cavities: 4 })
    expect(response.statusCode).toEqual(200)
  })
})
