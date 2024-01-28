const express = require('express')
const Sample = require('../models/Sample')

const router = express.Router()

// GET all samples
router.get('/', async (req, res) => {
    const samples = await Sample.find()
    res.status(200).json(samples)
})

// GET a single sample
router.get('/:id', async (req, res) => {
    try {
        const sample = await Sample.findById(req.params.id)
        if(!sample) return res.status(404).json({ msg: 'Sample not found' })
        res.status(200).json(sample)
    } catch (error) {
        res.status(500).json({ error: error })
    }
})

// POST a new study
router.post('/', async (req, res) => {
    const { sample_id, beer, beer_id, country, taxanomy } = req.body
    try {
        const sample = await Sample.create({ sample_id, beer, beer_id, country, taxanomy })
        res.status(201).json(sample)
    } catch (error) {
        res.status(400).json({ error: error })
    }
})

// PUT (update) an existing sample
router.put('/:id', async (req, res) => {
    const { sample_id, beer, beer_id, country, taxanomy } = req.body
    try {
        const sample = await Sample.findByIdAndUpdate(req.params.id, { sample_id, beer, beer_id, country, taxanomy }, { new: true })
        if(!sample) return res.status(404).json({ msg: 'Sample not found' })
        res.status(200).json(sample)
    } catch (error) {
        res.status(400).json({ error: error })
    }
})

// DELETE a sample
router.delete('/:id', async (req, res) => {
    try {
        const sample = await Sample.findByIdAndDelete(req.params.id)
        if(!sample) return res.status(404).json({ msg: 'Sample not found' })
        res.status(200).json({ msg: 'Sample deleted successfully' })
    } catch (error) {
        res.status(500).json({ error: error })
    }
})

module.exports = router
