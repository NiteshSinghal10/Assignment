import mongoose  from "mongoose";

//creating a schema
const productSchema: mongoose.Schema = new mongoose.Schema({
    id : {type : Number}, 
    title : {type : String}, 
    price : {type : String}, 
    category : {type : String}, 
    description : {type : String}, 
    image : {type : String} 
   }) 

//Create a collection
const Products = mongoose.model("Product",productSchema);

export default Products