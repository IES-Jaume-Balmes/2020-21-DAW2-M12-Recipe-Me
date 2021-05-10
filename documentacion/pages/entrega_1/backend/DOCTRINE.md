# INSTRUCCIONES DOCTRINE
---

## Utilidad:
- La dependencia **doctrine** va a generar automaticamente sentencias SQL para trabajar con una base de datos.

- Podemos trabajar con una base de datos en nuestro ``MySql`` o podemos hacerlo trabajando con el ``MySql``de nuestro contenedor de ``Docker``.

La diferencia entre trabajar con Docker o con nuestro servidor MySql esta en el comando:
- Para **Servidor Docker**: ``symfony console [sentencia]``
- Para **Servidor Local**: ``bin/console [sentencia]``

## Configuramos la base de datos 
Creamos la base de datos en el **Contenedor Docker**:
```php
> symfony console doctrine:database:create
```
Creamos una migración (sentencia SQL a la espera de ser ejecutada):
```php
> symfony console make:migration
```
Ejecutamos las migraciones que ya tenemos preparadas:
```php
> symfony console doctrine:migrations:migrate
```

Para destruir la base de datos [luego eliminar migraciones manualmente]:
```php
> symfony console doctrine:database:drop --force
```