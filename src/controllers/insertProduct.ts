import Products from "../models/products"
import express from "express"

type data={
    id : Number, 
    title : String, 
    price : String, 
    category : String, 
    description : String, 
    image : String 
   }

//insert the data 
const insertData  = async (req : express.Request , res : express.Response) =>  {
    try  {
        const result = await Products.create(req.body);
        res.send({
            success : true,
            message : "Product added successfully",
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

export default insertData;