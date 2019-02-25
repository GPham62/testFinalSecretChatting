const express = require('express');
const passport = require('passport');
const facebookStrategy = require('passport-facebook').Strategy;
const session = require('express-session');
const userModel = require('../model/User');
const authRouter = express.Router();

authRouter.use(passport.initialize());
authRouter.use(passport.session());

authRouter.get('/', (req, res) =>{
    console.log(req.session)
    res.send('Auth success');
})

authRouter.get('/fb', passport.authenticate('facebook'), (req, res, next) => {
});

authRouter.get('/fb/cb', passport.authenticate('facebook', {
    failureRedirect: '/failure', successRedirect: 'http://localhost:3001/suggest', failureFlash:true
}))


passport.use( new facebookStrategy({
    clientID: "244906609795883",
    clientSecret: "1b52142fd5201bfd2c7ddc7162ebe5a2",
    callbackURL: "http://localhost:3000/api/auth/fb/cb",
    profileFields: ['id','displayName','emails','photos'],
    passReqToCallback: true
},
(req, accessToken, refreshToken, profile, done) => {
    // console.log("access token: ", accessToken);
    // console.log("refresh token: ", refreshToken);
    // console.log("profile: ", profile);

    userModel.findOne({
        facebookProvider:{
            type: {
                id: profile.id
            }
        }
    }, (user, err) => {
        if (err) return done(err);
        if (user) {
            console.log(user);
            req.session.user = user;
            return done(null, user);
        }
        userModel.create({
            username: profile.displayName,
            email: profile._json.email,
            profile:{
                avatar: profile._json.photos
            },
            facebookProvider:{
                type: {
                    id: profile.id,
                    token: accessToken
                }
            }
        })
        .then((newUser, err) =>{
            console.log(newUser);
            req.session.user = newUser;
            return done(err, newUser);
        })
        .catch((err) => {return done(err)});
    })
}));

passport.serializeUser((user, done) => {
    done(null, user.id);
})

passport.deserializeUser((id, done) => {
    userModel.findOne({id}, (err, user) => {
        done(err, user);
    })
})
module.exports = authRouter;