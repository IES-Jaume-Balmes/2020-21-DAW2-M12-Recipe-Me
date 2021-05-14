---
title: "Sergi"
date: 2021-05-14T16:08:40+02:00
draft: true
---
### Material UI
Material UI es una plataforma que ofrece una gran variedad de plantillas y componentes preconstruidos con el objetivo de facilitar y acelerar el desarrollo de paginas web.

Para generar la vista nos estamos basando en varias de las plantillas y los componentes que nos ofrece https://material-ui.com/ adaptandolos a nuestras necesidades.

## Maquillaje main page
Por **maquillaje** nos estamos refiriendo a la parte visual 

Hemos definido exactamente como es el archivo de rutas `router.js`.

Mediante este archivo controlamos la dirección y el orden en que se visualizan las pantallas de nuestra web-app. Hemos cambiado la dirección de `login`que antes se encontraba en la raiz de la url.

Ahora tenemos la siguiente distribución:
- Login: `/login`
- Registro: `/register`

Las direcciones debajo de main, contienen el componente **navegador de main** junto con un **body** que hace referencia a otros componentes `lista`, `receta`, `perfil`:
- Pagina main: `/`
    - Listas: `/listas`
    - Recetas: `/recetas`
    - Perfil: `/perfil`
### Maquillaje login

### Maquillaje register

### Peticiones a backend
- Tarjetas
