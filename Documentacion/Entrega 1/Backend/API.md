# INSTRUCCIONES BACKEND
---
**Tutorial:** 
https://symfonycasts.com/screencast/api-platform/json-ld#play

## Pasos para crear nuestra API:

1. Creamos un proyecto symfony: 
```php
> symfony new nom_proj
```
2. Añadimos la dependencia principal: 
```php
> composer require api
```
3. Añadimos otras utilidades: 
```php
> composer require maker --dev
```
4. Creamos las entidades que necesitemos: 
```php
> bin/console make:entity
```
5. Encendemos el servidor: 
```php
> symfony serve -d
```
6. Para pararlo usaremos:
```php
> symfony server:stop
```

## Resultados obtenidos:
Por cada **entidad** que hayamos creado, la dependencia **API** nos va a generar automáticamente los métodos **HTTP** base, que són:
> GET (general)

> POST (general)

> GET (pasamos id)

> PUT (pasamos id)

> DELETE (pasamos id)

> PATCH (pasamos id)

A partir de esta base nosotros podemos modificar nuestra entidad a voluntad. Podemos controlar:
-  A cuales de estos **métodos podemos acceder**.
- Que parametros de los que contienen cada entidad podermos **leer y escribir**.
- Que parametros de cada entidad seran visibles des de los métodos **HTTP** de otras entidades.

### Existen mas características que aún tenemos pendientes de explorar.