const mongoose = require('mongoose')

const Schema = mongoose.Schema

// const taxaSchema = new Schema({
//     domain: String,
//     phylum: String,
//     class: String,
//     order: String,
//     family: String,
//     genus: String,
//     species: String,
// })

const sampleSchema = new Schema({
    sample_id: String,
    sample_link: String,
    beer: String,
    beer_id: String,
    country: String,
    type_of_data: String,
    target: String,
    sequencing_technique: String,
    brewery: String,
    published_date: Date,
    taxanomy: [{ rank: String, count: Number }],
    dataset_links: [String],
    publication: String,
    publication_link: String,
    study_id: String
})

module.exports = mongoose.model('Sample', sampleSchema)