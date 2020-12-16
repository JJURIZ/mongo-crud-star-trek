require('dotenv').config()

const models = require('./models')

// models.ship.create({
//     name: 'Defiant',
//     type: 'Defiant-class',
//     registry: 'NX-74205',
//     owner: 'United Federation of Planets',
//     status: 'Starfleet'
// })
// .then(() => {console.log('done with ship')})


models.Character.create({
    name: 'Kira Nerys',
    species: 'Bajoran',
    gender: 'Female',
    occupation: 'Commanding Officer: Deep Space 9',
    born: 2343,
    ships: [
        {
            name: 'Defiant',
            type: 'Defiant-class',
            registry: 'NX-74205',
            owner: 'United Federation of Planets',
            status: 'Starfleet'
        }
    ],
    actor: 'Nana Visitor'
})
.then(() => {console.log('done creating person')})

models.Character.create({
    name: 'Benjamin Sisko',
    species: 'Human',
    gender: 'Male',
    occupation: 'Captain: Deep Space 9',
    born: 2332,
    ships: [
        {
        name: 'Defiant'
        }
    ],
    actor: 'Avery Brooks'
})
.then(() => {console.log('done creating person')})