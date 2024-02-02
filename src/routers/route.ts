import express from "express"
import insertData from "../controllers/insertProduct"
import getAllProducts from "../controllers/getAllProducts"
import getById from "../controllers/getById"
import updateById from "../controllers/updateById"
import deleteById from "../controllers/deleteById"
import dataValidation from "../middlewares/joiValidation"
import updateDataValidation from "../middlewares/updateDataValidation"
import createToken from "../controllers/createToken"
import tokenAuthentication from "../middlewares/tokenAuthentication"
import userLoginAuthentication from "../controllers/userLoginAuthentication"
const router = express.Router();


//routes
router.post("/product",tokenAuthentication,dataValidation,insertData)
router.get("/products",tokenAuthentication,getAllProducts)
router.get("/product/:id",tokenAuthentication,getById)
router.put("/product/:id",tokenAuthentication,updateDataValidation,updateById)
router.delete("/product/:id",tokenAuthentication,deleteById)
router.post("/signup",createToken)
router.post("/login",userLoginAuthentication)
export default router;

