import mongoose, { Schema } from "mongoose"

//user login data
const loginSchema: Schema = new mongoose.Schema({
    username : {type: String, unique: true},
    password : {type: String }
})

const userLogin = mongoose.model("userlogin",loginSchema);
export default userLogin;

