const Mold = require('../models/Mold')
const dotenv = require('dotenv')
dotenv.config()
const jwt = require('jsonwebtoken')
const { ObjectId } = require('bson')

exports.create = async function (req, res) {
  try {
    let mold = await Mold.create(req.body)
    await mold.save()
    res.status(200).json('saved')
  } catch (e) {
    res.json(e.message)
  }
}

exports.findMold = async function (req, res) {
  try {
    let mold = await Mold.find({ moldNumber: req.params.moldNumber })

    if (!mold.length) {
      res.json('Mold number does not exist.')
      return
    }

    res.json(mold)
  } catch (e) {
    res.json(e)
  }
}

exports.updateMold = async function (req, res) {
  try {
    let mold = await Mold.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
    if (!mold) {
      res.json({ message: 'Mold does not exist' })
      return
    }

    res.json({ message: 'updated', mold: mold })
  } catch (e) {
    console.log('message')
    res.json(e.message)
  }
}
