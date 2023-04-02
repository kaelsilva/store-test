import { Router } from "express";
import ProductController from "../controllers/ProductController";

const router = Router();
const productController = new ProductController();

router.post("/", productController.createProduct.bind(productController));
router.get("/:id", productController.getProductById.bind(productController));
router.get("/", productController.getAllProducts.bind(productController));
router.put("/:id", productController.updateProductById.bind(productController));
router.delete(
  "/:id",
  productController.deleteProductById.bind(productController)
);

export default router;
