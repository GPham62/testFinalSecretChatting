const mongoose = require('mongoose')
const Interest = require('../model/Interest')
const testMongoServer = 'mongodb://localhost:27017/api-secret-chating'
const interests = [
    {name: 'Eating'},
    {name: 'Drinking'},
    {name: 'Sleeping'},
    {name: 'PewDiePie'},
    {name: 'Boc Phot'},
    {name: 'Underground music'}
]

mongoose.connect(testMongoServer, {useNewUrlParser: true}, () => {
    console.log('Connected to mongo server at' + testMongoServer)
    Interest.create(interests, (err, results) => {
        if (err) console.log(err)
        else {
            console.log('Add interests successful!')
        }
    })
})
