const User = require('../model/User')

module.exports = {
    checkIfFacebookIdExists(id) {
        return new Promise((resolve, reject) => {

            User.findOne({'facebookProvider.id': id})
                .then(user => {
                    if (!user) resolve(false)
                    else resolve(true)
                })
                .catch(error => reject(error))
        })
    },
    createNewUser(user) {
        return new Promise((resolve, reject) => {
            const newUser = new User(user)
            newUser.save((error, result) => {
                if (error) reject(error)
                else resolve(result)
            })
        })
    },
    getUserByFacebookId(id) {
        return new Promise((resolve, reject) => {

            User.findOne({'facebookProvider.id': id})
                .then(user => {
                    resolve(user)
                })
                .catch(error => reject(error))
        })
    },
    getAllUsers(exceptUserId) {
        return new Promise((resolve, reject) => {
            if (exceptUserId.match(/^[0-9a-fA-F]{24}$/)) {
                User.find({_id: {$ne: exceptUserId}})
                    .then(users => {
                        resolve(users)
                    })
                    .catch(error => reject(error))
            }
            else {
                User.find({})
                    .then(users => {
                        resolve(users)
                    })
                    .catch(error => reject(error))
            }
        })
    }
}