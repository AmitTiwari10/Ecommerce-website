import express from "express";
import { IsAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import {
  categoryController,
  createCatrgoryController,
  deleteCategoryController,
  singleCategoryController,
  updateCatrgoryController,
} from "../controllers/categoryController.js";
import {
  createProductController,
  deleteProductController,
  getProductController,
  getSingleProductController,
  productPhotoController,
  updateProductController,
} from "../controllers/productController.js";
import formidable from "express-formidable";

//router object

const router = express.Router();

//routes
//create category
router.post(
  "/create-product",
  requireSignIn,
  IsAdmin,
  formidable(),
  createProductController
);

//update product
router.put(
  "/update-product/:pid",
  requireSignIn,
  IsAdmin,
  formidable(),
  updateProductController
);

//get All product
router.get("/get-product", getProductController);

//single product
router.get("/get-product/:slug", getSingleProductController);

//get photo
router.get("/product-photo/:pid", productPhotoController);

//delete product
router.delete("/product/:pid", requireSignIn, IsAdmin, deleteProductController);
export default router;
