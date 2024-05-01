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
  braintreePaymentController,
  braintreeTokenController,
  createProductController,
  deleteProductController,
  getProductController,
  getSingleProductController,
  productCategoryController,
  productCountController,
  productFilterController,
  productListController,
  productPhotoController,
  searchProductController,
  updateProductController,
} from "../controllers/productController.js";
import formidable from "express-formidable";
import braintree from "braintree";

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
router.delete("/delete-product/:pid", deleteProductController);
//filter product
router.post("/product-filters", productFilterController);

//product count
router.get("/product-count", productCountController);

//product per page
router.get("/product-list/:page", productListController);

//search product
router.get("/search/:keyword", searchProductController);

//category wise product
router.get("/product-category/:slug", productCategoryController);

//payment
//token
router.get("/braintree/token", braintreeTokenController);

//payments
router.post("/braintree/payment", requireSignIn, braintreePaymentController);
export default router;
