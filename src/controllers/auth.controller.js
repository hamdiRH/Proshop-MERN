import asyncHandler from 'express-async-handler';
import * as authService from '../services/auth.service';

//@des Register a new user
//@route POST /api/register
//@access Public
export const registerUser = asyncHandler(async (req, res) => {
  const user = await authService.regiserUser(req.body, res);
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
  const user = await authService.authUser(req.body);
  if (user) res.status(200).send(user);
  else {
    res.status(401);
    throw new Error('Ivalid email or password');
  }
});

//@des Auth user with fb or google & generate token
//@route POST /api/user/loginfg
//@access Public
export const authUserFG = asyncHandler(async (req, res) => {
  const user = await authService.authUserFG(req.body);
  if (user) res.status(200).send(user);
  else {
    res.status(401);
    throw new Error('Error');
  }
});
