---
title: "Seguridad JWT"
date: 2021-05-23T12:25:36+02:00
draft: true
---

## JSON Web Token
Usamos **JWT** para autorizar las operaciones de backend (*Get, Post, Put, Delete*).

Utilizamos el paquete que nos ofrece [Lexik](https://github.com/lexik/LexikJWTAuthenticationBundle) y lo fuimos complementamos con un [tutorial](https://www.youtube.com/watch?v=XT4oy1d1j-g&t=1368s) que encontramos en youtube.

Un JWT no es mas que un objeto JSON codificado mediante una herramienta de encriptación privada de tu servidor, que llamamos **clave privada**. El servidor también posee una **clave pública** para verificar la identidad del Token.

Primero obtenemos el **JWT** con la petición `GET /api/login_check`. Lo almacenamos en una cookie en nuestro **Frontend** y posteriormente lo usamos en cada petición a **Backend** para que confirme que somos un usuario registrado y compruebe nuestros `roles de acceso`.

### Comprobamos Login
curl -X POST -H "Content-Type: application/json" https://localhost:8000/api/login_check -d '{"email":"sergi@recipeme.com","password":"sergi"}'

Esta operación nos devuelre una respuesta **HTTP 200** junto con un JSON
```
{"token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImN0eSI6IkpXVCJ9.eyJpYXQiOjE2MjE3Njc4MTcsImV4cCI6MTYyMTc3MTQxNywicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6InNlcmdpQHJlY2lwZW1lLmNvbSIsInVzZXJJZCI6M30.kQIHLVy9JJGd8TLff4-jScVqS2RU2Jjgzj2txDcHr5UKagGOQJPn8a9HVNPthOrpqf6qg1UV3zNF-EfsYLAKSWLx_MzaCI6heN9T34fdYZqj2gstBsJ0MBy_rczn2YR1ENG5nQN3oA1rtppX5EbEU4L1Asqr_osHoDN8lv-0KfnqMHpQSEntGwbfIdnSUAaiTrFRA8MO_hD4uMIoZuVTfU6St9skeJVHATZQXWKzIs6oA7IF6tMJQUi4xtvt7MX6xIfVvQfJChhqDIT_GlHOi4s3GF_K5Kdb-jmwVMro63Yy_zVg2LcaqT1lDkc3m3yO680ZIAzhDu8sqlvK2gDPeg"}
```

### Get sin Token
curl -X GET https://localhost:8000/api/recipes

Nos devuelve una respuesta **HTTP 400 o 401** advirtiendo que el JWT no ha sido encontrado en la petición.


### Get con token
curl -X GET https://localhost:8000/api/recipes -H "Authorization: BEARER {token}"

Si el token es valido nos devolverá **HTTP 200 o 201** con la información de nuestra **API** en formato **JSON**.

### Arreglos
Con esta nueva funcionalidad hemos tenido que readaptar las peticiones en frontend para incluir este token en las cabeceras de cada petición. Por ejemplo:

```
async componentDidMount() {
    let token = cookie.get("token");
    const apiUrl = "https://127.0.0.1:8000/api/recipes";

    await axios
        .get(apiUrl, {
            headers: {
                Authorization: "Bearer " + token,
            },
        });
}
```


### Otros casos
Se pueden dar otros casos al enviar el token:
- Token ha expirado (*hemos puesto maximo 3600 segundos*).
- El formato de **JWT** no es valido en caso de enviar un token alterado.
- No tenemos la autorización necesaria para acceder a un endpoint determinado. Se puede producir cuando un usuario intenta acceder a una operación restringida donde solo pueden acceder los administradores.




## Obstaculos
Al principio intentamos blindar las operaciones de backend mediante token de sesion `PHPSESSID`. 

Vimos que funcionaba bién en la parte de **Backend**, pero no se comunicaba adecuadamente con el **Frontend**. Por eso decidimos tirar por otro medio, que es el del `JSON Web Token`.


Tubimos un par de problemas con el `JWT`.

Enviaba el nombre de usuario en vez del email pero no podíamos saberlo, porque al ser un string encriptado no aparecía en ningún sitio. Pudimos solucionarlo con una herramienta para debugar que nos ofrece la pagina de **Auth0**:
* [Debugar JWT](https://jwt.io/)

Necesitabamos que ademas el Token incluyera información extra. En nuestro caso, debía incluir el ´ID´ del usuario, para posteriormente hacer peticiones a elementos privados de ese id.
* [Customizar JWT](https://github.com/lexik/LexikJWTAuthenticationBundle/blob/master/Resources/doc/2-data-customization.md#eventsjwt_decoded---validating-data-in-the-jwt-payload)