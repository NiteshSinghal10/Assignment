import jwt from "jsonwebtoken"
import {Request,Response} from "express"
import dotenv from "dotenv"
import userLogin from "../models/userLogin" 
dotenv.config()

//when user don't have account and create a new account
const createToken = async (req : Request , res : Response) =>  {

    try  {
        const user = req.body
        const {_id} = await userLogin.create(user)
        const token = await jwt.sign({_id},String(process.env.SECRET_KEY));
        res.send({"token" : token})
    }catch(err)  {
        res.send({"error": "Username is already exist"})
    }
}

export default createToken