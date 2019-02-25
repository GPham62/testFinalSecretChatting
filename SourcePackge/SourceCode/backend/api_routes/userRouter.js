const express = require('express')
const userRouter = express.Router()
const User = require('../model/User')

// Get all users
userRouter.get('/', (req, res) => {
    User.find({})
    .then((users) => {
        res.send({ data: users });
    })
    .catch((error) => {
        res.send({ error });
    });
})

//Get random user
userRouter.get('/user', (req, res) => {
    User.find({}, function (err, data) {
        if (err) console.log(err);
        else {
            const randomUser = data[Math.floor(Math.random() * data.length)];
            res.send({ user: randomUser });
        }
    })
        .catch(error => res.send({ error }))

});

//Get user by ID
userRouter.get('/user/:userId', (req, res) => {
    const userId = req.params.userId;
    User.findById(userId, function (err, data) {
        if (err) console.log(err);
        else {
            res.send({ user: data });
        }
    })
        .catch(error => res.send({ error }))
})

// Create new user
userRouter.post('/', (req, res) => {
    /*comment password field if use facebook API*/
	//const { username, password, avatar } = req.body;
	//const salt = bcrypt.genSaltSync(12); 	//12 is typical  
	//const hashPassword = bcrypt.hashSync(password,salt);
    const { username, email, avatar, profile, interests } = req.body;
    const newUsers = { username, email, avatar, profile, interests };
	User.create(newUsers)
		.then((userCreated) => {
			res.send({ data: userCreated });
		})
		.catch((error) => {
			res.send({ error });
		});
});

//Update user
userRouter.put('/:userId', (req, res) => {
    const { userId } = req.params;
    //profile, interest are objects
	const { email, avatar, profile, interest } = req.body;
	User.findById(userId)
		.then((userFound) => {
			if(!userFound) res.send({ error: "User not exist!" })
			else {
                if(email) userFound.email = email;
                if(avatar) userFound.avatar = avatar;
                if(profile) userFound.profile = profile;
                if(interest) userFound.interest = interest;
				return userFound.save();
			}
		})
		.then((userUpdated) => {
			res.send({ data: userUpdated });
		})
		.catch((error) => {
			res.send({ error });
		});
});

module.exports = userRouter