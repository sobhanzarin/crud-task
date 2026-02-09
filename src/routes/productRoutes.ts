import { Router, Request, Response } from "express";
import { validationHandler } from "../middleware/validate.middleware";
import {
  createProductValidator,
  updateProductValidator,
  idValidator,
} from "../validations/product.validation";
import {
  createProduct,
  deleteProduct,
  getAllProduct,
  getProductById,
  updateProduct,
} from "../controllers/productController";

const router = Router();
router.post(
  "/products",
  createProductValidator,
  validationHandler,
  createProduct,
);
router.get("/products", getAllProduct);
router.get("/products/:id", idValidator, validationHandler, getProductById);
router.put(
  "/products/:id",
  updateProductValidator,
  validationHandler,
  updateProduct,
);
router.delete("/products/:id", deleteProduct);
export default router;
