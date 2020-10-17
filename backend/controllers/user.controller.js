import asyncHandler from 'express-async-handler';
import * as userService from '../services/user.service';

//@des Register a new user
//@route POST /api/register
//@access Public
export const registerUser = asyncHandler(async (req, res) => {
  const user = await userService.regiserUser(req.body, res);
  if (user === 'emailExist') {
    res.status(400);
    throw new Error('Email exist');
  } else if (user) res.status(201).send(user);
  else {
    res.status(400);
    throw new Error('Ivalid user data');
  }
});

//@des Auth user & generate token
//@route POST /api/user/login
//@access Public
export const authUser = asyncHandler(async (req, res) => {
  const user = await userService.authUser(req.body);
  if (user) res.status(200).send(user);
  else {
    res.status(401);
    throw new Error('Ivalid email or password');
  }
});

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
