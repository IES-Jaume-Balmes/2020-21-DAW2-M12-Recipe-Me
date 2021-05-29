---
title: "Interceptores Axios"
date: 2021-05-27T19:30:46+02:00
draft: true
---

# Interceptores Axios

En el archivo base de nuestro **frontend** (`Frontend/src/index.src`) hemos creado una constante de la clase `Axios` con unas particularidades. Esta constante se encargará de interceptar las peticiones `Axios` que se hagan con ella y les aplicará su funcionalidad particular.

El objetivo es que cada petición de tipo `interceptor` incluya por defecto el **Json Web Token** y además en caso de que el token esté expirado, se encargue de solicitar un nuevo JWT mediante el **token de refresco** y finalmente, vuelva a ejecutar la petición de manera automática.

En caso de que el **token de refresco** también haya expirado, la función hará un `catch` del error y hará un logout del usuario, conduciendolo a la pantalla de **login** y eliminando sus cookies personales.