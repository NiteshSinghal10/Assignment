import express from "express"
import createConnection from "./src/config/db"
import dotenv from "dotenv"
import router from "./src/routers/route"

dotenv.config()

const app : express.Application = express()

app.use(express.json())
app.use(router)

app.listen(process.env.PORT,() => {
    console.log(`server started at port no. ${process.env.PORT}`)
})

createConnection();


