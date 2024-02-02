import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()

const createConnection  = async ()=> {
    try  {
        const result = await mongoose.connect(String(process.env.DATABASE_URL));
        console.log("Database connected...")
    }
    catch(err)  {
        console.log(err)
    }
}

export default createConnection