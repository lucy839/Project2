const passport = require("passport");
const LocalStrategy = require('passport-local').Strategy;
const db = require("../models")


passport.use(
    new LocalStrategy({
        usernameField: "email"
    },
        function (email, password, done) {
            db.User.findOne({
                where: {
                    email: email
                }
                
            }).then(function (dbUser) {
                if (!dbUser) {
                    console.log("here")
                    return done(null, false, {
                        message: "Incorrect Email."
                    });
                } 
                
                else if (dbUser.password !=password) {
                    console.log("hi")
                    return done(null, false, {
                        message: "Incorrect Password."
                    });
                }
                return done(null, dbUser);
            });       
        }
    ));

    passport.serializeUser(function(user, cb) {
        cb(null, user);
      });
      
      passport.deserializeUser(function(obj, cb) {
        cb(null, obj);
      });

    module.exports = passport;