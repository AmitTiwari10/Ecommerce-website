import express from "express";
import { IsAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import {
  categoryController,
  createCatrgoryController,
  deleteCategoryController,
  singleCategoryController,
  updateCatrgoryController,
} from "../controllers/categoryController.js";

//router object

const router = express.Router();

//routes
//create category
router.post(
  "/create-category",
  requireSignIn,
  IsAdmin,
  createCatrgoryController
);

//update category
router.put(
  "/update-category/:id",
  requireSignIn,
  IsAdmin,
  updateCatrgoryController
);

//get All category
router.get("/get-category", categoryController);

//single category
router.get("/single-category/:slug", singleCategoryController);

//delete category
router.get(
  "/delete-category/:slug",
  requireSignIn,
  IsAdmin,
  deleteCategoryController
);
export default router;
