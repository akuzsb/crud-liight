import usersModel from "../models/users.model.js";
import { validarRequeridos } from "../utils/validarRequeridos.js";
import generateToken from "../utils/generateToken.js";
import { compare } from "../utils/encrypt.js";

const login = async (req, res) => {
	try {
		let requeridos = ["email", "password"];
		let errores = validarRequeridos({ body: req.body, requeridos });
		if (!errores.valido) {
			return res.status(400).json({ msg: errores.mensaje });
		}

		// buscar si el usuario existe
		const user = await usersModel.getUserByEmail(req.body.email);
		if (!user) {
			return res.status(404).json({ msg: "El usuario no existe" });
		}

		// validar password
		const validPassword = await compare({ password: req.body.password, hash: user.password });
		if (!validPassword) {
			return res.status(400).json({ msg: "Contraseña incorrecta" });
		}

		// generar token
		const token = generateToken(user.iduser);

		res.json({ token });

	} catch (error) {
		console.log(error);
		res.status(500).json({ msg: "Hubo un error al iniciar sesión" });
	}
}


export default {
	login,
}