import express from "express"
import insertData from "../controllers/insertProduct"
import getAllProducts from "../controllers/getAllProducts"
import getById from "../controllers/getById"
import updateById from "../controllers/updateById"
import deleteById from "../controllers/deleteById"
import dataValidation from "../middlewares/joiValidation"
import updateDataValidation from "../middlewares/updateDataValidation"
import createToken from "../controllers/createToken"
import userLoginAuthentication from "../controllers/userLoginAuthentication"
import userLoginValidation from "../middlewares/userLoginValidation"
import passport from "../middlewares/tokenAuthenticationPassport"

const router = express.Router();

//routes
router.post("/product",passport.authenticate("jwt",{session: false}),dataValidation,insertData)
router.get("/products",passport.authenticate("jwt",{session: false}),getAllProducts)
router.get("/product/:id",passport.authenticate("jwt",{session: false}),getById)
router.put("/product/:id",passport.authenticate("jwt",{session: false}),updateDataValidation,updateById)
router.delete("/product/:id",passport.authenticate("jwt",{session: false}),deleteById)
router.post("/signup",createToken)
router.post("/login",userLoginValidation,userLoginAuthentication)
export default router;

