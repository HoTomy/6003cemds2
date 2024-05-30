import passport from "koa-passport";
import { BasicStrategy } from "passport-http";
import { users } from "../routes/user";

const verifyPassword = (user: any, password: string) => {
  return user.password === password;
};

passport.use(
  new BasicStrategy(async (username, password, done) => {
    try {
      const foundUser =  => user.username === username);
      if (foundUser && verifyPassword(foundUser, password)) {
        done(null, { user: foundUser });
      } else {
        console.log(`Invalid username or password for ${username}`);
        done(null, false);
      }
    } catch (error) {
      console.error(`Error during authentication for user ${username}: ${error}`);
      done(null, false);
    }
  })
);

export const basicAuth = async (ctx: RouterContext, next: any) => {
  await passport.authenticate("basic", { session: false })(ctx, next);
};