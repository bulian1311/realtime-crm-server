import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { ExtractJwt, Strategy as JwtStrategy } from "passport-jwt";

import accessEnv from "#root/hellpers/accessEnv";
import User from "#root/models/user.model";

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: accessEnv("JWT_SECRET"),
};

passport.use(
  new LocalStrategy(
    {
      usernameField: "login",
      passwordField: "password",
      session: false,
    },
    (login, password, done) => {
      User.findOne({ where: { login } })
        .then((user) => {
          if (!user || !user.checkPassword(password)) {
            return done(null, false, {
              message: "Неверный логин или пароль.",
            });
          }

          return done(null, user);
        })
        .catch((err) => done(err));
    }
  )
);

passport.use(
  new JwtStrategy(jwtOptions, (payload, done) => {
    User.findByPk(payload.id)
      .then((user) => {
        if (!user) {
          done(null, false);
        }

        done(null, user);
      })
      .catch((err) => done(err));
  })
);

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

export default passport;
