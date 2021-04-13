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

- Con Symfoni nos encargaremos de la parte backend y la gestión de usuarios y recetas.

- Con React le daremos cara y ojos a la aplicación.

* Nos gustaria que la app sea diseñada al estilo movile first para que la experiencia sea más adecuada al día a día del usuario.

## Funcionamiento

La aplicación consta de una base de datos de recetas de comidas, la cual es accesible a través de un loggin. También permite añadir y registrar más recetas, acceder a la BDD global y guardar recetas como favoritas en la base de datos del usuario.
Estás recetas pueden ser desplegadas en una lista de la compra compuesta por los ingredientes de cada receta.

La lista podremos gestionarla y modificarla a través de nuestra aplicación, incluso eviarla por correo electrónico. De todos modos, nuestra idea es que la propia aplicación permita interactuar con la lista generada, ofreciendo ventajas respecto a un texto plano.

Al entrar a la aplicación tendrás unas recetas por defecto aleatorias basadas en tus #tags (recetas del día, recomendados segun tus gutos, mas valoradas... ). Ejemplo.: Usuario: vegano, favorito-fruta, favorito-tofu.

Ejemplo de uso:  
Introduzco en la app 14 platos que quiero comer durante la semana (entiendanse comidas y cenas).  
La app me generara una lista de la compra con información de los productos y las cantidades necesarias, asi como del precio aproximado (maximo - mínimo) de toda la compra.
El lunes me voy al mercado con el móbil en la mano y la lista generada anteriorment. Voy tachando lo que meto en el carrito.

## Herramientas, lenguajes y frameworks utilizados

1. Herramientas:
   - GitHub.
   - VS code.
   - MySQL
2. Lenguajes:
   - HTML
   - JavaScript
   - PHP
   - CSS
3. Frameworks:
   - React
   - Symfony

## Arquitectura de la aplicación

MVC  
El cliente se comunica con el controlador que tendremos y este con la base de datos.

![alt text](./img/arquitectura.jpeg)
