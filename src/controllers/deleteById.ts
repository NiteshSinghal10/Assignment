import {Request,Response} from "express";
import Products from "../models/products"

//Delete a single product using ID
const deleteById = async (req : Request , res : Response) => {
    try  {
        const result = await Products.deleteOne({id : parseInt(req.params.id)});
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
export default deleteById;