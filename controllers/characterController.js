const router = require('express').Router()

const models = require('../models')

router.get('/', (req, res) => {
    models.Character.find().then((foundCharacter) => {
        res.status(200).json({ people: foundCharacter})
    })
    .catch((err) => { res.send(err) })
})

models.get('/:id', (req, res) => {
    models.Character.findOne({_id: req.params.id})
    .then((character) => {
        res.status(200).json({character})
    })
    .catch((err) => {res.send(err)})
})

module.exports = router