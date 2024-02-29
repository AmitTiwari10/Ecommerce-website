import express from "express";
import { IsAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import {
  createCatrgoryController,
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
router.post(
  "/update-category",
  requireSignIn,
  IsAdmin,
  updateCatrgoryController
);

export default router;
