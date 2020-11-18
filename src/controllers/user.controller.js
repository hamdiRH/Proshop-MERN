import asyncHandler from 'express-async-handler';
import * as userService from '../services/user.service';

//@des Get user profile
//@route GET /api/user/profile
//@access Private
export const getUserProfile = asyncHandler(async (req, res) => {
  const profile = await userService.getProfile(req);
  if (profile) res.status(200).send(profile);
  else {
    res.status(404);
    throw new Error('User not found');
  }
});

//@des Update user profile
//@route PUT /api/user/profile
//@access Private
export const updateProfile = asyncHandler(async (req, res) => {
  const profile = await userService.updateProfile(req);
  if (profile) res.status(200).send(profile);
  else {
    res.status(404);
    throw new Error('User not found');
  }
});

//@des Get All Users
//@route GET /api/user
//@access Private /Admin
export const getAllUsers = asyncHandler(async (req, res) => {
  const users = await userService.getAllUsers(req);
  if (users) res.status(200).send(users);
  else {
    res.status(404);
    throw new Error('User not found');
  }
});

//@des Delete one user By Id
//@route DELETE /api/user
//@access Private /Admin
export const deleteUserById = asyncHandler(async (req, res) => {
  const user = await userService.deleteUserById(req);
  if (user) res.status(200).send(user);
  else {
    res.status(404);
    throw new Error('User not found');
  }
});

//@des fetch one user By Id
//@route GET /api/user/id
//@access Private /Admin
export const getUserById = asyncHandler(async (req, res) => {
  const user = await userService.getUserById(req);
  if (user) res.status(200).send(user);
  else {
    res.status(404);
    throw new Error('User not found');
  }
});


//@des update one user By Id
//@route PUT /api/user/id
//@access Private /Admin
export const updateUserById = asyncHandler(async (req, res) => {
  const user = await userService.updateUserById(req);
  if (user) res.status(200).send(user);
  else {
    res.status(404);
    throw new Error('User not found');
  }
});



