const mongoose = require('mongoose')
const User = require('../model/User')
const testMongoServer = 'mongodb://localhost:27017/api-secret-chating'
const users = [
    {
        username: 'hahaha',
        email: 'haha@gmail.com',
        profile: {
            gender: 'male',
            birthday: new Date('01/27/2002'),
            address: 'Hanoi',
            phone: '11111111'
        }
    },
    {
        username: 'hahahe',
        email: 'hahe@gmail.com',
        profile: {
            gender: 'male',
            birthday: new Date('01/27/2002'),
            address: 'Hanoi',
            phone: '11111111'
        }
    },
    {
        username: 'hahaho',
        email: 'haho@gmail.com',
        profile: {
            gender: 'male',
            birthday: new Date('01/27/2002'),
            address: 'Hanoi',
            phone: '11111111'
        }
    }
]

mongoose.connect(testMongoServer, {useNewUrlParser: true}, () => {
    console.log('Connected to mongo server at' + testMongoServer)
    User.create(users, (err, results) => {
        if (err) console.log(err)
        else {
            console.log('Add users successful!')
        }
    })
})
