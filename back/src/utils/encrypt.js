import bcrypt from 'bcrypt';

export const encrypt = async (password) => {
	const salt = await bcrypt.genSalt(10);
	return await bcrypt.hash(password, salt);
}

export const compare = async ({ password, hash }) => {
	return await bcrypt.compare(password, hash);
}