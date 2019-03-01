const express = require('express');
// const passport = require('passport');
// const facebookStrategy = require('passport-facebook').Strategy;
const jwt = require('jsonwebtoken');
const userModel = require('../model/User');
const authRouter = express.Router();

// authRouter.use(passport.initialize());
// authRouter.use(passport.session());

authRouter.get('/', (req, res) =>{
    res.send('Auth success');
})

// authRouter.get('/fb', passport.authenticate('facebook'), (req, res, next) => {
// });

// authRouter.get('/fb/cb', passport.authenticate('facebook', {
//     session: false, failureRedirect: '/',
//     //  successRedirect: 'http://localhost:3000/suggest'
// }), (req, res) => {
//     console.log(req.user.jwtoken)
//     const token = req.user.jwtoken;
//     res.cookie('auth', token);
//     res.redirect("http://localhost:3000/")
// })


// passport.use( new facebookStrategy({
//     clientID: "244906609795883",
//     clientSecret: "1b52142fd5201bfd2c7ddc7162ebe5a2",
//     callbackURL: "http://localhost:5000/api/auth/fb/cb",
//     profileFields: ['id','displayName','emails','photos'],
//     passReqToCallback: true
// },
// (req, accessToken, refreshToken, profile, cb) => {
//     // console.log("access token: ", accessToken);
//     // console.log("refresh token: ", refreshToken);
//     // console.log("profile: ", profile);
//     userModel.findOne({["facebookProvider.type.id"]: profile._json.id}, (err, foundUser) => {
//         if (err) return cb(err);
//         if (foundUser) {
//             foundUser.jwtoken = jwt.sign({facebook: foundUser.facebookProvider}, "jwtsecret");
//             console.log(foundUser.jwtoken);
//             foundUser.save((err) => {
//                 if (err) throw err;
//                 return cb(err, foundUser);
//             }) 
//         }
//         else{
//             userModel.create({
//                 username: profile.displayName,
//                 email: profile._json.email,
//                 profile:{
//                     avatar: profile._json.picture
//                 },
//                 facebookProvider:{
//                     type: {
//                         id: profile.id,
//                         token: accessToken
//                     }
//                 }
//             })
//         .then((newUser, err) =>{
//             newUser.jwtoken = jwt.sign({facebook: newUser.facebookProvider}, "jwtsecret");
//             newUser.save((err) => {
//                 return cb(err, newUser);
//             })
//         })
//         .catch((err) => {return cb(err)});
//     }}
//     )
// }));

// passport.serializeUser((user, cb) => {
//     cb(null, user.id);
// })

// passport.deserializeUser((id, done) => {
//     userModel.findOne({id}, (err, user) => {
//         done(err, user);
//     })
// })
module.exports = authRouter;