# INSTRUCCIONES BACKEND
---
**Tutorial:** 
https://symfonycasts.com/screencast/api-platform/json-ld#play

### Pasos para crear nuestra API:

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