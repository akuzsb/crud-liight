// import db from '../config/database.js';
import usersModel from "../models/users.model.js";
import { validarRequeridos } from "../utils/validarRequeridos.js";

const getUsers = async (req, res) => {
	try {
		const users = await usersModel.getUsers();
		res.json(users);
	} catch (error) {
		console.log(error);
		res.status(500).json({ msg: "Hubo un error al obtener los usuarios" });
	}
}

const getUserById = async (req, res) => {
	try {
		const user = await usersModel.getUserById(req.params.id);
		if (!user) {
			return res.status(404).json({ msg: "El usuario no existe" });
		}
		res.json(user);
	} catch (error) {
		console.log(error);
		res.status(500).json({ msg: "Hubo un error al obtener el usuario" });
	}
}

const createUser = async (req, res) => {
	try {
		let requeridos = ["email", "name", "lastname", "password"];
		let errores = validarRequeridos({ body: req.body, requeridos });
		if (!errores.valido) {
			return res.status(400).json({ msg: errores.mensaje });
		}

		// buscar que el mail no esté en uso
		const user = await usersModel.getUserByEmail(req.body.email);
		if (user) {
			return res.status(400).json({ msg: "El email ingresado ya está en uso" });
		}

		const result = await usersModel.createUser({ email: req.body.email, name: req.body.name, lastname: req.body.lastname, password: req.body.password });
		res.status(201).json({ msg: "Usuario creado correctamente", id: result.insertId });

	} catch (error) {
		console.log(error);
		res.status(500).json({ msg: "Hubo un error al crear el usuario" });
	}
}

const updateUser = async (req, res) => {
	
	try {
		let requeridos = ["email", "name", "lastname", "password"];
		let errores = validarRequeridos({ body: req.body, requeridos });
		if (!errores.valido) {
			return res.status(400).json({ msg: errores.mensaje });
		}

		// buscar si el usuario existe
		const user = await usersModel.getUserById(req.params.id);
		if (!user) {
			return res.status(404).json({ msg: "El usuario no existe" });
		}


		const result = await usersModel.updateUser({ email: req.body.email, name: req.body.name, lastname: req.body.lastname, password: req.body.password, id: req.params.id });
		res.status(201).json({ msg: "Usuario actualizado correctamente", id: user.iduser });

	} catch (error) {
		console.log(error);
		res.status(500).json({ msg: "Hubo un error al actualizar el usuario" });
	}
}

const deleteUser = async (req, res) => {
	try {
		// buscar si el usuario existe
		const user = await usersModel.getUserById(req.params.id);
		if (!user) {
			return res.status(404).json({ msg: "El usuario no existe" });
		}

		// si el usuario es el mismo que el logueado, no permitir eliminar
		if (req.userId === user.iduser) {
			return res.status(400).json({ msg: "No puedes eliminar tu propio usuario" });
		}

		const result = await usersModel.deleteUser(req.params.id);
		res.json({ msg: "Usuario eliminado correctamente" });

	} catch (error) {
		console.log(error);
		res.status(500).json({ msg: "Hubo un error al eliminar el usuario" });
	}
}

export default {
	getUsers,
	createUser,
	updateUser,
	getUserById,
	deleteUser
}