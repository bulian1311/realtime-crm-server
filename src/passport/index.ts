import * as passport from "passport";
import * as passportLocal from "passport-local";
import * as passportJwt from "passport-jwt";

import User from "#root/models/user.model";

const LocalStrategy = passportLocal.Strategy;
const JwtStrategy = passportJwt.Strategy;
const ExtractJwt = passportJwt.ExtractJwt;

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeader(),
  secretOrKey: process.env.JWT_SECRET,
};

passport.use(
  new LocalStrategy(
    {
      usernameField: "login",
      passwordField: "password",
      session: false,
    },
    async (login, password, done) => {
      try {
        await User.findOne({ where: { login } });
      } catch (err) {
        console.error(err.message);
        return done(err.message);
      }
      // User.findOne({email}, (err, user) => {
      //   if (err) {
      //     return done(err);
      //   }
      //   if (!user || !user.checkPassword(password)) {
      //     return done(null, false, {message: 'User does not exist or wrong password.'});
      //   }
      //   return done(null, user);
      // });
    }
  )
);

passport.use(
  new JwtStrategy(jwtOptions, async (payload, done) => {
    // User.findById(payload.id, (err, user) => {
    //   if (err) {
    //     return done(err)
    //   }
    //   if (user) {
    //     done(null, user)
    //   } else {
    //     done(null, false)
    //   }
    // })
  })
);

export default passport;
