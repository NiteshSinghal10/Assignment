import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()

const createConnection: Function = async ()=> {
    const result = await mongoose.connect(String(process.env.DATABASE_URL));
}

export default createConnection