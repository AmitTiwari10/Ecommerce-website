import express from "express";
import {
  forgotPasswordController,
  getAllOrdersController,
  getOrdersController,
  loginController,
  orderStatusController,
  registerController,
  updateProfileController,
} from "../controllers/authController.js";
import { IsAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
//router object

const router = express.Router();

//routing
//Register || METHOD POST
router.post("/register", registerController);

//LOGIN || POST
router.post("/login", loginController);

//Forgot Password
router.post("/forgot-password", forgotPasswordController);

//protected route auth
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

//Admin protected route auth
router.get("/admin-auth", requireSignIn, IsAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

//update-profile
router.put("/profile", requireSignIn, updateProfileController);

//orders
router.get("/orders", requireSignIn, getOrdersController);

//all-orders
router.get("/all-orders", requireSignIn, IsAdmin, getAllOrdersController);

//order status update
router.put(
  "/order-status/:orderId",
  requireSignIn,
  IsAdmin,
  orderStatusController
);

export default router;
