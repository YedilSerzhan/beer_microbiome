const express = require('express')
const Sample = require('../models/Sample')

const router = express.Router()

// GET all studies
router.get('/', async (req, res) => {
    const samples = await Sample.find()
    res.status(200).json(samples)
})

// GET a single study
router.get('/:id', (req, res) => {
    res.json({ msg: "GET a single study" })
})

// POST a new study
router.post('/', async (req, res) => {
    const { sample_id, beer, beer_id, country, taxanomy } = req.body
    try {
        const sample = await Sample.create({ sample_id, beer, beer_id, country, taxanomy })
        res.status(200).json(sample)
    } catch (error) {
        res.status(400).json({ error: error })
    }
    res.json({ msg: "POST a new study" })
})

module.exports = router