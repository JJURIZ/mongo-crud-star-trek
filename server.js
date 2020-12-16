const express = require('express')
const app = express();
require('dotenv').config()

app.use(express.urlencoded({extended: false}))
app.use(express.json()); 

const models = require('./models')

app.get('/', (req, res) => {
    res.send('Welcome to the Star Trek Associations')
})

app.use('/characters', require('./controllers/peopleController'))

const PORT = process.env.PORT || 5005
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})