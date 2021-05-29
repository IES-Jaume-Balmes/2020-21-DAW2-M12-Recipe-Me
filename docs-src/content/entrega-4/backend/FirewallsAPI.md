---
title: "Firewalls API-Platform"
date: 2021-05-27T19:32:36+02:00
draft: true
---

# Acceso a Swagger + JWT
Hasta ahora hemos conseguido que nuestros usuarios puedan acceder a los endpoints mediante el `Json Web Token` y su herramienta de `refresco`.

Pero esto nos ocasionó un problema. No podíamos trabajar con la herramienta `Swagger`de la **API**, ya que cada endpoint nos pedía un JWT y nuestra manera de acceder y almacenarlos estaba preparada para funcionar mediante las herramientas de **Frontend**.

(Recordemos que `Swagger` es la interfaz gráfica para la **API** que nos ofrece el paquete de [Api Platform](https://api-platform.com/docs/distribution/)).

Solucionamos el problema añadiendo un segundo modo de autentificación. El token de sessión o también llamado ``PHPSESSID``.

Hemos creado un controlador de login que va acompañado de un archivo `.twig` para crear una pequeña vista.

Todo esto lo gestionamos mediante el archivo de seguridad que encontramos en:
`Backend/config/security.yaml`

```
firewalls:
    # Acceso login al web token para entrar con token
    login:
        pattern:  ^/api/login
        stateless: true
        anonymous: true
        json_login:
            check_path:               /api/login_check
            username_path: email
            password_path: password
            success_handler:          lexik_jwt_authentication.handler.authentication_success
            failure_handler:          lexik_jwt_authentication.handler.authentication_failure
    
    # put it before all your other firewall API entries
    refresh:
        pattern:  ^/api/token/refresh
        stateless: true
        anonymous: true
        
    # Acceso al PHPSESSID para entrar en backend
    api:
        anonymous: true
        lazy: true
        provider: app_user_provider
        json_login:
            check_path: app_login
            username_path: email
            password_path: password
        guard:
            authenticators:
                - lexik_jwt_authentication.jwt_token_authenticator
                - App\Security\LoginFormAuthenticator
            entry_point: lexik_jwt_authentication.jwt_token_authenticator
        logout:
            path: app_logout
```


# Privatización de operaciones de usuario
Mediante las anotaciones del `Bundle de API Platform`podemos controlar el acceso a nuestros `endpoints`:

```php
/**
 * @ApiResource(
 *      collectionOperations={
 *          "get"={"security"="is_granted('ROLE_ADMIN')"},
 *          "post"={"security_post_denormalize"="is_granted('ROLE_USER') and object.getPropietario() == user"}
 *      },
 *      itemOperations={
 *          "get"={"security"="is_granted('ROLE_ADMIN')"},
 *          "delete"={"security"="is_granted('ROLE_USER') and object.getPropietario() == user"}
 *      }
 * )
 * @ORM\Entity(repositoryClass=ListaCompraRepository::class)
 */
```
Aqui arriba encontramos el ejemplo del acceso a nuestras listas de la compra.

Por una parte tenemos las `collectionOperations` que són los endpoints que nos devuelven una colección de objetos de la classe `Lista_Compra` y por otra parte tenemos las `itemOperations` que nos permiten operar con un único objeto.
Por ejemplo:
- Para obtener la información de todas las listas de la compra, hemos puesto que únicamente puedan hacerlo los usuarios con el `ROL DE ADMINISTRADOR`.
- Para crear una lista de la compra, tenemos que asegurarnos que únicamente puedan hacerlo usuarios con el `ROL DE USUARIO O SUPERIOR` <u>y además</u> el usuario al que se le asigna esa lista únicamente puede ser **él mismo**. De este modo, nos aseguramos de que **Manolo** solo pueda `POSTEAR` Listas de la compra para **Manolo** y no para **Luisa**.