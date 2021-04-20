# Entrega 0

## Integrantes del equipo

- Frank Palomino
- Kevin Rodriguez
- Sergi Francés

## Descripción

Recipe-Me se trata de una aplicacion web de servicio al ciudadano de a pié. Facilita las tareas quotidianas relacionadas con las necesidades básicas de alimento:

- Lista de la compra.
  ¿Por que ir al mercadona 3 veces a la semana cuando puedes comprarlo todo de una tacada?

- Gestion de dietas. Aprendizaje de recetas que se escapan de nuestra zona de comfort.

- Variedad de alimentos.

- Comunidad en la que todos los usuarios pueden compartir y puntuar recetas. #Autoexploración, #conocimiento, #futuro, #perspectiva.

El proyecto sera tanto de front como de backend. Nosotros generaremos una base de datos relacional en MySQL, donde el mismo cliente nos ayudará a llenarla.

- Con Symfony nos encargaremos de la parte backend y la gestión de usuarios y recetas.

- Con React le daremos cara y ojos a la aplicación.

* Nos gustaria que la app sea diseñada al estilo movile first para que la experiencia sea más adecuada al día a día del usuario.

## Funcionamiento
Habrá un perfil de usuario.

### Usuario:
- Registro: el usuario tiene que poder registrarse.
- Darse de baja: un usuario que se ha registrado tiene que poder darse de baja (borrarse).
- Login: el usuario registrado tiene que poder iniciar sesión.
- Logout: el usuario que ha iniciado sesión, tiene que poder cerrar sesión.

### Recetas:  
- Buscar: un usuario registrado tiene que poder buscar recetas en la base de datos.
- Crear: un usuario registrado tiene que poder crear recetas nuevas en la base de datos.
- Borrado: un usuario tiene que poder borrar de una receta que haya creado él.

### Listas de recetas:
- Crear: un usuario tiene que poder crear listas privadas.
- Borrar: un usuario tiene que poder borrar sus listas.
- Listar propias: ver sus listas de recetas.
- Añadir recetas a sus listas.
- Quitar recetas de sus listas.

### Lista de la compra
- Generar lista de la compra a partir de una lista de recetas.
- Enviar la lista de la compra a través de mail.

## Herramientas, lenguajes y frameworks utilizados

1. Herramientas:
   - GitHub.
   - VS code.
   - MySQL: Base de Datos
2. Lenguajes:
   - HTML: 
   - JavaScript
   - PHP
   - CSS
3. Frameworks:
   - React: Frontend
   - Symfony: Backend
4. Otros:
   - Documentación: MarkDown
   - Presentación: Next.js
   - Capacitor: app android

## Arquitectura de la aplicación

MVC  
El cliente se comunica con el controlador que tendremos y este con la base de datos.

![alt text](./img/arquitectura.jpeg)
