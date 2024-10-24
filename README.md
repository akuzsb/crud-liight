# Prueba Técnica Liight

A continuación, se detallan los comandos necesarios para ejecutar el proyecto. 
Este proyecto fue desarrollado en un entorno de Docker, por lo que no es necesario tener instalado NodeJS, NPM, ni ninguna otra dependencia en tu máquina. Solo necesitas tener Docker instalado.

## Comandos

Para construir y levantar los contenedores de Docker, utiliza el siguiente comando:

```sh
docker compose up --build -d
```
Una vez que los contenedores estén funcionando, puedes acceder al frontend en la siguiente URL:

http://localhost:5173

Si queres probar la api del backend, puedes acceder a la siguiente URL:

http://localhost:3000

Para detener los contenedores, utiliza el siguiente comando:

```sh
docker compose down
```

## Credenciales de Acceso

El primer login lo tiene que hacer con el siguiente usuario:

- **Usuario:** augustosn24@gmail.com
- **Clave:** chinchulin


## Despliegue en Producción

He desplegado el proyecto en una Raspberry Pi que tengo corriendo Docker y lo he publicado en la siguiente URL:

http://asantillan.duckdns.org

Puedes acceder a la aplicación completa y probar todas sus funcionalidades desde esta dirección.


¡Gracias por revisar mi prueba técnica!