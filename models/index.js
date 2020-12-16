const mongoose = require('mongoose')

mongoose.connect(`${process.env.MONGO_URI}/people`), {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

module.exports = {
    Character: require('./Character'),
    Ship: require('./Ship').Ship
}
