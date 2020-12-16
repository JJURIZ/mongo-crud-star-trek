mongoose = require('mongoose')

const shipSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    class: String,
    registry: String,
    owner: String,
    status: String
})

module.exports = mongoose.model('ships', shipSchema)