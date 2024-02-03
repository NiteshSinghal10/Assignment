import joi from "joi"
import {NextFunction, Request,Response} from "express"

const userLoginValidation = (req: Request, res: Response, next: NextFunction) =>  {
    const loginSchema = joi.object().keys({
        username: joi.string().alphanum().required(),
        password: joi.string().alphanum().min(8).max(16).required()
    })

    const {error} = loginSchema.validate(req.body,{abortEarly: false})
    if(error)  {
        res.send({"error": error.details[0].message});
    }else  {
        next();
    }
}

export default userLoginValidation;

