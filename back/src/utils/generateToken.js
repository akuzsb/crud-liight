import jwt from 'jsonwebtoken';

const generateToken = (id) => {
	return jwt.sign({ id }, process.env.SECRET_TOKEN, {
		expiresIn: 60 * 60 * 24,
		algorithm: 'HS256',
	});
}

export default generateToken;