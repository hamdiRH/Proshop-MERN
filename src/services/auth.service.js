import User from '../models/user.model';
import _ from 'lodash';
import generateToken from '../helpers/generateToken';

export const regiserUser = async ({ email, password, name }, res) => {
  const userExists = await User.findOne({ email });
  if (userExists) return 'emailExist';
  const user = await User.create({
    email,
    name,
    password,
  });
  if (user)
    return {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    };
  else return null;
};

export const authUser = async ({ email, password }) => {
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    return {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    };
  } else return null;
};

export const authUserFG = async ({ email, name }) => {
  const userExists = await User.findOne({ email });

  if (userExists) {
    return {
      _id: userExists._id,
      name: userExists.name,
      email: userExists.email,
      isAdmin: userExists.isAdmin,
      token: generateToken(userExists._id),
    };
  } else {
    const user = await User.create({
      email,
      name,
    });
    return {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    };
  }
};
