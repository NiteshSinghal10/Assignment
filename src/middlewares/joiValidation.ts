import joi from "joi"
import {NextFunction, Request,Response} from "express"

//jab ham data ko insert krenge tb data validate hoga
const dataValidation = (req : Request , res : Response,next : NextFunction) => {
    const schema = joi.object().keys({
        id : joi.number().required(),
        title : joi.string().required(),
        price : joi.string().required(),
        category : joi.string().required(),
        description : joi.string().required(),
        image : joi.string().required()
    })

    const {error} = schema.validate(req.body,{abortEarly : false})
    if(error)  {
        res.send({"error" : "Enter valid data"})
    }
    else  {
        next()
    }
}




export default dataValidation;
