import Products from "../models/products"
import {Request,Response} from "express"

//Get a single product by ID
const getById = async (req : Request , res : Response) =>  {
    try  {
        const result = await Products.find({id : parseInt(req.params.id)});
        res.send({
            success : true,
            message : "Product find successfully",
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
export default getById;