import Products from "../models/products"
import {Request,Response} from "express"
//Update a single product using ID
const updateById = async (req : Request ,res : Response) =>  {
    try  {
        const result = await Products.findOneAndUpdate({id : parseInt(req.params.id)},req.body,{upsert : true,new : true});
        res.send({
            success : true,
            message : "Product update successfully",
            data : result
        })
    }
    catch(err : any)  {
        res.status(405).send({
            success : false,
            message : "Failed",
            err : err.message
        })
    }
}

export default updateById