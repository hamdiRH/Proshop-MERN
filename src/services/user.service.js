import User from '../models/user.model';
import _ from 'lodash';
import generateToken from '../helpers/generateToken';

export const getProfile = async (req) => {
  const user = await User.findById(req.user._id);
  if (user)
    return {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    };
  else return null;
};

export const updateProfile = async ({ user, body }) => {
  const userProfile = await User.findById(user._id);
  if (userProfile) {
    userProfile.name = body.name || userProfile.name;
    userProfile.email = body.email || userProfile.email;
    if (body.password) userProfile.password = body.password;
    const updatedUserProfile = await userProfile.save();
    return {
      _id: updatedUserProfile._id,
      name: updatedUserProfile.name,
      email: updatedUserProfile.email,
      isAdmin: updatedUserProfile.isAdmin,
      token: generateToken(user._id),
    };
  } else return null;
};

export const getAllUsers = async (req) => {
  const users = await User.find();
  if (_.isEmpty(users)) throw new Error('no user found');
  return users;
};

export const deleteUserById = async (req) => {
  const user = await User.deleteOne({ _id: req.params.id });
  if (!user) throw new Error('no user found');
  return user;
};

export const getUserById = async (req) => {
  const user = await User.findOne({ _id: req.params.id });
  if (!user) throw new Error('no user found');
  return user;
};

export const updateUserById = async ({ params, body }) => {
  const userProfile = await User.findById(params.id);
  if (userProfile) {
    userProfile.name = body.name || userProfile.name;
    userProfile.email = body.email || userProfile.email;
    userProfile.isAdmin = body.isAdmin;

    const updatedUserProfile = userProfile.save();
    return {
      _id: updatedUserProfile._id,
      name: updatedUserProfile.name,
      email: updatedUserProfile.email,
      isAdmin: updatedUserProfile.isAdmin,
    };
  } else return null;
};
