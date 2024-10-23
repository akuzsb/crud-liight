import jwt from 'jsonwebtoken';

const auth = (req, res, next) => {

	// el token viene en el header y bearer token
	const token = req.header('Authorization')?.split(' ')[1];
	if (!token) {
		return res.status(401).json({ msg: 'Es requerido un token de autenticación' });
	}

	try {
		const decoded = jwt.verify(token, process.env.SECRET_TOKEN);
		req.userId = decoded.id;
		next();
	} catch (error) {
		console.error(error);
		res.status(401).json({ msg: 'Token no válido' });
	}
}

export default auth;