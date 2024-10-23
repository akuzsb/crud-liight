import mysql from 'mysql2/promise';

async function createConnectionWithRetry() {
    const maxRetries = 5; // Número máximo de reintentos
    let attempt = 0;

    while (attempt < maxRetries) {
        try {
            const connection = await mysql.createConnection({
                host: process.env.DB_HOST,
                user: process.env.DB_USER,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_NAME,
                port: process.env.DB_PORT || 3306,
            });

            console.log('Conectado a la base de datos como ID ' + connection.threadId);
            return connection; // Retorna la conexión exitosa
        } catch (error) {
            attempt++;
            console.error(`Error al conectar a la base de datos: ${error.stack}`);
            console.log(`Intentando de nuevo (${attempt}/${maxRetries})...`);

            // Espera 5 segundos antes de volver a intentar
            await new Promise(resolve => setTimeout(resolve, 5000));
        }
    }

    throw new Error('No se pudo conectar a la base de datos después de múltiples intentos.');
}

const connection = await createConnectionWithRetry();

export default connection;
