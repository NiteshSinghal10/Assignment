import joi from "joi"
import {NextFunction, Request,Response} from "express"

const updateDataValidation = (req : Request , res : Response,next : NextFunction) => {
    const schema = joi.object().keys({
        id : joi.number().optional(),
        title : joi.string().optional(),
        price : joi.string().optional(),
        category : joi.string().optional(),
        description : joi.string().optional(),
        image : joi.string().optional()
    }).unknown(false)

    const {error} = schema.validate(req.body,{abortEarly : false})
    if(error)  {
        res.send("Enter valid data")
    }
    else  {
        next()
    }
}
export default updateDataValidation;
