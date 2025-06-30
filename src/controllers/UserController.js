// controllers/UserController.js
import asyncHandler from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async (req, res, next) => {
  res.status(201).json({ success: true, message: "Everything is fine" });
res.staus(400).json({ success: false, message: "Something went wrong" });


});

export { registerUser };
