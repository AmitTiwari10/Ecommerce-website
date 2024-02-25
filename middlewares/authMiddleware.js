import JWT from "jsonwebtoken";
import userModel from "../models/userModel.js";

//protected routes token base
export const requireSignIn = async (req, res, next) => {
  try {
    const decodeToken = JWT.verify(
      req.headers.authorization,
      process.env.JWT_SECRET
    );
    req.user = decodeToken;
    next();
  } catch (error) {
    console.log(error);
  }
};

export const IsAdmin = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.user._id);
    if (user?.role !== 1) {
      return res.status(401).send({
        sucess: false,
        message: "UnAuthorized Access",
      });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    res.status(401).send({
      sucess: false,
      error,
      message: "Error in admin middleware",
    });
  }
};
