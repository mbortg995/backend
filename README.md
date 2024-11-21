# Introduction (Everything listed here is related with 03_EXPRESS_EXERCISE)

Express es un framework web transigente, escrito en JavaScript y alojado dentro del entorno
de ejecución NodeJS. El módulo explica algunos de los beneficios clave de este framework,
como configurar tu entorno de desarrollo y cómo realizar tareas comunes en desarrollo y
publicación web.

## ¿Cuáles son los principales objetivos de este proyecto?


- Manejar Node js
- Entender cómo interactuar con Express js
- Aprender a manejar Express js
- Manejar NPM


## 1.1.Ejercicios


**Ejercicio 1**
- ~Crear un archivo con el nombre main.js~
- ~Levantar un servidor utilizando Express, al levantar el servidor tiene que mostrar un mensaje que diga:~
  - ~`Servidor levantado en el puerto ${puerto}`.~

**Ejercicio 2**
- ~Levantar un servidor de Express~
- ~Manejar las siguientes rutas:~
  - ~Ruta: Raíz del sitio (‘/’) ,Metodo: get, Acción: Mostrar un mensaje de bienvenida~
  - ~Ruta: /events, Método: get, Acción: Mostrar un mensaje que diga: listado de eventos~
  - ~Ruta: /events, Método: post, Acción: Mostrar un mensaje que diga: crear un evento~
  - ~Ruta: /events, Método: put, Acción: Mostrar un mensaje que diga: actualizar un evento~
  - ~Ruta: /events, Método: delete, Acción: Mostrar un mensaje que diga: borrar un evento~
- ~Utilizar Postman para probar todas las llamadas~

 **Ejercicio 3**
- ~Al llamar a localhost:3000/events se debe mostrar el array con todos los eventos:~
 ````
[{
"id": 1,
"name": "Mi primer evento",
"description": "Consequatur fugiat debitis hic quam doloremque minus. Sit
eius harum velit omnis. Dolores est assumenda impedit qui explicabo aperiam
at rerum. Quidem sunt autem nihil enim ut ut perferendis.",
"start_at": "2025- 05 - 22T00:00:00.000000Z",
"ends_at": "2025- 05 - 25T00:00:00.000000Z",
"address": "Plaça de L'aigua, Poblados Marítimos, 46024 Valencia",
"booking_open": true,
"image": "https://images.unsplash.com/photo- 1523580494863 -
6f3031224c94",
}]
 ````

- ~El JSON debe estar como un fichero en nuestra aplicación~
  - ~Podemos crear un fichero events.js en el que devolvamos un array de eventos.~
 ````
export default [
{
id: 1,
name: “Mi primer evento”,
...
}
]
````
- ~Implementar funcionalidad para poder crear un evento~
- ~Implementar funcionalidad para poder actualizar un evento~
  - Nota: Habrá que pasarle un parámetro para saber que evento queremos actualizar. WIP.
- Implementar funcionalidad para poder eliminar un evento
  - Nota: Habrá que pasarle un parámetro para saber que evento queremos eliminar.
- Crear filtro por que tenga la venta de entradas abierta
- Crear filtro que muestre los eventos que empiecen después de una fecha específica
- Crear una ruta (endpoint) que tenga un parámetro con el id del evento y me devuelve solo el evento que se ha consultado

**Investigar error CORS api**

## 1.2. Github


- Subir el proyecto a un repositorio en github
- Hacer commits con frecuencia
- Hacer un pequeño readme



