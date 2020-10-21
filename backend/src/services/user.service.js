import User from '../models/user.model';
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