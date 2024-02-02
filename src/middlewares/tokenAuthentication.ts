import jwt from "jsonwebtoken"
import env from "dotenv"
import {NextFunction, Request,Response} from "express"
import userLogin from "../models/userLogin"

env.config();


//jab request ayegi to token check hoga but only private api's pr
const tokenAuthentication = async (req : Request , res : Response,next : NextFunction) =>  {
    if(req.headers.authorization)  {
        const result = await jwt.verify((req.headers.authorization as string).split(" ")[1] , String(process.env.SECRET_KEY)) as {_id: string};
        
        const {_id} = result
        const user = await userLogin.find({_id : _id})
        
        if(user.length !== 0)  {
            next()
        }
        else  {
            res.send({"error" : "Token is Invalid"})
        }
    }
    else  {
        res.send({"error" : "token is not found"})
    }
}

export default tokenAuthentication