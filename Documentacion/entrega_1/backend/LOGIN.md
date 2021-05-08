---
name: Login
---
# INSTRUCCIONES LOGIN
___

## Dependencias:

1. Añadimos las dependencias que vamos a necesitar:
```php
> composer require doctrine/doctrine-bundle
> composer require doctrine/orm
> composer require symfony/maker-bundle
> composer require symfony/security-bundle
> composer require symfony/web-profiler-bundle
```
- Hay mas, pero en principio, el resto ya vendran por defecto.

2. Creamos los archivos necesarios con el maker de symfony.
```php
> bin/console make:controller SecurityController
```
## Creamos la entidad Usuario:
```php
> bin/console make:user
```
- Queremos almacenar su informacion en la base de datos **[YES]**.
- Symfony se encarga automaticamente de generar el archivo y las rutas. También se encarga de definir las tablas y las columnas de nuestra **BDD**.


## Creamos el sistema de autentificación:
```php
> bin/console make:auth 
```
- Respondemos de manera logica a los parametros.
- Le asignamos como controlador la clase **SecurityController** que hemos creado antes.
- Vamos a **./src/Controllers/SecurityController** y podemos cambiar la ruta por defecto.

## Archivo de configuración:

```php
App/config/packages/security.yaml
```
En el apartado **encoders** lo configuramos para que use el algoritmo que nosotros queramos.

```
security:
    encoders:
        App\Entity\User:
            algorithm: md5
            encode_as_base64: false
            iterations: 0
```
El resto se habrá configurado automáticamente según lo que hemos ido introduciendo en la linea de comandos.
