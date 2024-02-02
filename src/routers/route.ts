import express from "express"
import insertData from "../controllers/insertProduct"
import getAllProducts from "../controllers/getAllProducts"
import getById from "../controllers/getById"
import updateById from "../controllers/updateById"
import deleteById from "../controllers/deleteById"
const router = express.Router();

router.post("/product",insertData)
router.get("/products",getAllProducts)
router.get("/product/:id",getById)
router.put("/product/:id",updateById)
router.delete("/product/:id",deleteById)
export default router;

