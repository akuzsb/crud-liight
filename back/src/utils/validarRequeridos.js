
export const validarRequeridos = ({ body, requeridos }) => {
	const faltantes = requeridos.filter(requerido => !body[requerido]);
	if (faltantes.length === 0) {
		return { valido: true };
	} else {
		return { valido: false, mensaje: `Faltan los siguientes campos requeridos: ${faltantes.join(', ')}` };
	}
};
