import jwt from 'jsonwebtoken';
import config from '../config';

const generateToken = (id) => jwt.sign({ id }, config.jwt.secret, { expiresIn: '30d' });

export default generateToken;
