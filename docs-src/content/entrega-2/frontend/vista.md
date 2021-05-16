---
title: "Vista"
date: 2021-05-14T16:08:40+02:00
draft: true
---
### Material UI
Material UI es una plataforma que ofrece una gran variedad de plantillas y componentes preconstruidos con el objetivo de facilitar y acelerar el desarrollo de paginas web.

Para generar la vista nos estamos basando en varias de las plantillas y los componentes que nos ofrece https://material-ui.com/ adaptandolos a nuestras necesidades.

## Maquillaje main page
Por **maquillaje** nos estamos refiriendo a la parte visual, lo que conformaría composición de los elementos y su css.

Hemos definido exactamente como seran las rutas de nuestra web-app en el archivo de rutas `router.js`.

Mediante este archivo controlamos la dirección y el orden en que se visualizan las pantallas de nuestra web-app. Hemos cambiado la dirección de `login`que antes se encontraba en la raiz de la url.

Ahora tenemos la siguiente distribución:
- Login: `/login`
- Registro: `/register`

Las direcciones debajo de main, contienen el componente **navegador de main** junto con un **body** que hace referencia a otros componentes `lista`, `receta`, `perfil`:
- Pagina main: `/`
    - Listas: `/listas`
    - Recetas: `/recetas`
    - Perfil: `/perfil`

### Maquillaje login & register
Hemos adaptado una plantilla que nos ha proporcionado **Material UI** a nuestro login y register.

Las funcionalidades ya estaban creadas, solo hemos modificado la parte visual.

Hemos añadido una pequeña funcionalidad de validación en frontend donde no se nos permite introducir valores `null`.

Falta implementar las funcionalidades:
- ¿Has olvidado la contraseña?
- Recordar usuario y contraseña.



### Peticiones a backend
Hemos preparado las peticiones a **API** para cada una de nuestras pantallas.

Para ello hemos creado una série de componentes **Tarjeta** que se encargan de recibir los objetos obtenidos como respuesta de nuestras peticiones a la API.

Las peticiones las hemos hecho mediante la herramienta `fetch`. Hemos usado las operaciones `GET`y `POST`.

