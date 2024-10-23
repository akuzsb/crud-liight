import db from '../config/database.js';
import { encrypt } from '../utils/encrypt.js';

const getUsers = async () => {
	try {
		const [rows] = await db.query('SELECT iduser, email, name, lastname from users;');
		return rows;
	} catch (error) {
		console.log(error);
	}
}

const createUser = async (user) => {
	try {
		// encrypt password
		user.password = await encrypt(user.password);
		const [result] = await db.query('INSERT INTO users (email, name, lastname, password) VALUES (?, ?, ?, ?);', [user.email, user.name, user.lastname, user.password]);
		return result;
	} catch (error) {
		console.log(error);
	}
}

const getUserById = async (id) => {
	try {
		const [rows] = await db.query('SELECT iduser, email, name, lastname from users WHERE iduser = ?;', [id]);
		return rows[0];
	} catch (error) {
		console.log(error);
	}
}

const getUserByEmail = async (email) => {
	try {
		const [rows] = await db.query('SELECT iduser, email, name, lastname, password from users WHERE email = ?;', [email]);
		return rows[0];
	} catch (error) {
		console.log(error);
	}
}

const updateUser = async (user) => {
	try {
		// encrypt password
		user.password = await encrypt(user.password);
		const [result] = await db.query('UPDATE users SET email = ?, name = ?, lastname = ?, password = ? WHERE iduser = ?;', [user.email, user.name, user.lastname, user.password, user.id]);
		return result;
	} catch (error) {
		console.log(error);
	}
}

const deleteUser = async (id) => {
	try {
		const [result] = await db.query('DELETE FROM users WHERE iduser = ?;', [id]);
		return result;
	} catch (error) {
		console.log(error);
	}
}


export default {
	getUsers,
	createUser,
	getUserById,
	updateUser,
	deleteUser,
	getUserByEmail
}