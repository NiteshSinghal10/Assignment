import express from "express"
import insertData from "../controllers/insertProduct"
import getAllProducts from "../controllers/getAllProducts"
import getById from "../controllers/getById"
import updateById from "../controllers/updateById"
import deleteById from "../controllers/deleteById"
import joiValidation from "../middlewares/joiValidation"
import updateDataValidation from "../middlewares/updateDataValidation"
const router = express.Router();

router.post("/product",joiValidation,insertData)
router.get("/products",getAllProducts)
router.get("/product/:id",getById)
router.put("/product/:id",updateDataValidation,updateById)
router.delete("/product/:id",deleteById)
export default router;

