import env from "dotenv"
import userLogin from "../models/userLogin"
import passport from 'passport';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
env.config();

//jab request ayegi to token check hoga but only private api's pr

// option 
const opt = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: String(process.env.SECRET_KEY)
}

//object creation jwt strategy
const jwtStrategy = new JwtStrategy(opt, async (payload, done) =>  {
    const {_id} = payload as {_id: string};
    const user = await userLogin.find({_id: _id});
    if(user.length !== 0)  {
        done(null,user);
    }else  {
        done("User is not found",null)
    }
})
    
//register strategy
passport.use(jwtStrategy)

export default passport
