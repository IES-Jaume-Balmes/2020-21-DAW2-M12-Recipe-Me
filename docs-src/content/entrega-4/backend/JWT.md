---
title: "JWT Refresh"
date: 2021-05-27T19:30:46+02:00
draft: true
---

# JWT Auto-Refresco
Hemos querido implementar un método para **autorefrescar el token**, de este modo ofrecemos seguridad para nuestros usuarios y ademas evitamos que necesiten logearse cada vez que caduque el token.

Para ello utilizamos el bundle de [markitosgv](https://github.com/markitosgv/JWTRefreshTokenBundle):

Al logearnos recibimos **2 tokens**. El token normal que contiene nuestras credenciales y un `refresh_token` que ademas se almacena en la base de datos de nuestro servidor.

Al hacer una petición a `backend`ya sabemos que el usuario envía el **token normal** para demostrar que esta autorizado para hacer esa operación.

Ese token tiene una fecha de expiración, que podemos controlar desde el archivo `Backend/config/packages/lexik_jwt_authentication`. Hemos puesto que expire en 3600 segundos (1 hora).

## Funcionamiento

En el caso de que el **token normal** se encuentre expirado, el usuario tiene la oportunidad de enviar su **token de refresco** para solicitar un nuevo **token normal**.

Todo esto lo hacemos automáticamente mediente unos [interceptores de peticiones](../frontend/InterceptoresAxios) `axios` que hemos colocado en nuestro **Frontend**.

Al hacerlo, nuestra API, mediante el `package de markitosgv`, se encarga automáticamente de comprobar si ese **refresh_token** es valido o ya se encuentra caducado. 

En caso de que sea válido, devuelve al usuario un nuevo objeto json con un par de **tokens** con una fecha de expiración actualizada.

En el archivo `Backend/config/packages/gesdinet_jwt_refresh_token` podemos configurar el tiempo de expiración de nuestro **token de refresco**. En caso de que al pedir un nuevo **token** mediante el **token de refresco** resulte que no sea válido por caducidad, el frontend nos redirigirá automáticamente a la pantalla de `login` y eliminará todas las **cookies** que contienen información del `Usuario`.