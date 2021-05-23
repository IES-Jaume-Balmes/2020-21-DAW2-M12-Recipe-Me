---
title: "Añadidos"
date: 2021-05-23T12:18:56+02:00
draft: true
---
## Añadidos

### Login
Encriptamos el password en backend en el momento en que se hace una petición a la API.

### Delete Usuarios
Arreglamos el endpoint `DELETE /users/id` para que al borrar un usuario también se eliminen las listas de la compra donde él es propietario. Delete en cascada.

### Autorización
[JSON Web Token](./JWT.md)