import {NextFunction, Request,Response} from "express"
import jwt from "jsonwebtoken"
import userLogin from "../models/userLogin" 
import env from "dotenv"
env.config()

//when user login by username and password
const userLoginAuthentication =async (req : Request , res : Response ) =>  {
    const userData = req.body;
    const ack = await userLogin.find({username : userData.username , password : userData.password});
    if(ack.length != 0)  {
        const token = await jwt.sign({"_id" : ack[0]._id},String(process.env.SECRET_KEY))
        res.send(token)
    }
    else  {
        res.send({"error" : "You don't have account or Password is wrong."})
    }
}

export default userLoginAuthentication