## Usuario
Cambio de botones de Usuario Cerrar sesión y darse de baja a Tarjeta Usuario para tenerlo todo centralizado y en la misma card para tener un diseño mejor.

Hemos llamado a las funciones del componente padre
```
Usuario.js
```

para simplemente cambiar de componentes estos botones. 

Al tener el token para nuestro componente ya sea para cargar su información o darnos de baja necesitaremos pasarle el token por el header

``` js
.get(profileEndpoint, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
```