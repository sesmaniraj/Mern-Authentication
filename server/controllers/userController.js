import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

export const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });
  if (existingUser) {
    res.status(400).json({ message: "User already exists" });
  }
  const user = await User.create({
    name,
    email,
    password,
  });
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400).json({
      message: "Invalid User data",
    });
  }
});

export const authUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Auth user" });
});

export const logoutUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "logout user" });
});

export const getUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "get user" });
});
export const updateUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Update user" });
});
