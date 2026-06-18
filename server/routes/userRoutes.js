import express from "express";
import {
  loginUser,
  paymentRazorpay,
  registerUser,
  userCredits,
} from "../controllers/userControllers.js";
import userAuth from "../middlewares/auth.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/credits", userAuth, userCredits);
userRouter.post("/pay-razor", userAuth, paymentRazorpay);

export default userRouter;

// http://localhost:4000/api/user/register
// http://localhost:4000/api/user/login
