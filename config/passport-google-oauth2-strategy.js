const passport = require("passport");
const googleStrategy = require("passport-google-oauth").OAuth2Strategy;
const crypto = require("crypto");
const User = require("../models/user");

//---- tell passport to use new strategy for google login
passport.use(
  new googleStrategy(
    {
      //----enter all google auth details
      clientID: "TdpfaiZdsyiJXlysyrEhOmvfdjGDSPj4",
      clientSecret:
        "yvrjjSnD2a1wWeRLYlAdqYZCJKBHZxM3yWw5KOrJSKQVz2bmcFMCkweCyuOE2BTe",
      callbackURL: "http://localhost:3500/users/auth/google/callback",
    },
    //---- refreshToken=> automatically generate token if older expire
    function (accessToken, refreshToken, profile, done) {
      //---- find a user
      User.findOne({ email: profile.emails[0].value }).exec(function (
        err,
        user
      ) {
        if (err) {
          console.log("error in google starateg", err);
          return;
        }

        console.log(profile);
        //---- if user is present sign in else sign up(create user)
        if (user) {
          return done(null, user);
        } else {
          User.create(
            {
              name: profile.displayName,
              email: profile.emails[0].value,
              password: crypto.randomBytes(20).toString("hex"),
            },
            function (err, user) {
              if (err) {
                console.log(
                  "error in creating user google stategy-passport",
                  err
                );
                return;
              }

              return done(null, user);
            }
          );
        }
      });
    }
  )
);

module.exports = passport;
