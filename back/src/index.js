// import 'dotenv/config';
import express from 'express';
import cors from 'cors';

import usersRoutes from './routes/users.routes.js';
import loginRoutes from './routes/login.routes.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api/users', usersRoutes);
app.use('/api/login', loginRoutes);


app.get('/', (req, res) => {
	res.json({
		'msg': 'Bienvenido a la API del crud liigth',
		'autor': 'Augusto Santillan'
	});
});

// manejo de rutas no encontradas
app.use((req, res, next) => {
	res.status(404).json({ 'msg': 'Ruta no encontrada' });
});
// manejo de errores
app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(500).json({
		'success': false,
		'msg': 'Hubo un error en el servidor, por favor intente más tarde'
	})
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
