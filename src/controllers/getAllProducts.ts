import Products from "../models/products"
import {Request,Response} from "express"

//get all list of products
const getAllProducts = async(req : Request , res : Response) => {
    try  {
        const result = await Products.find();
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
export default getAllProducts
