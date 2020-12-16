mongoose = require('mongoose')
// const shipSchema = require('./ship')

const shipSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    class: String,
    registry: String,
    owner: String,
    status: String
})


const characterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    species: {
        type: String,
        required: true
    },
    gender: String,
    occupation: String,
    born: Number,
    ships: [shipSchema],
    actor: {
        type: String, 
        required: true,
        unique: false
    }
})

module.exports = mongoose.model('characters', characterSchema)