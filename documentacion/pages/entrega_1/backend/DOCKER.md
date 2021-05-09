# INSTRUCCIONES DOCKER
El objetivo es tener una base de datos en común, independiente de nuestra máquina. De este modo no necesitaremos modificar nunca el archivo de variables de entorno **.env** de nuestra aplicación.

- Descargar **Docker desktop** de la pagina oficial.  
- Ir al directorio donde queremos instalar contenedores.  
 

### Instalamos un contenedor con mysql:

```php
> bin/console make:docker:database 
```

- Ejecutamos **TODOS** los contenedores disponibles. Tarda unos segundos en encenderlo todo.
```php
> docker-compose up -d
```
- Para acceder a la base de datos:
```php
> docker-compose exec database mysql -u root --password=password
```

### Otros comandos:

- Paramos los contenedores activos: ``docker-compose stop``
- Paramos contenedores y eliminamos su imagen por completo [elimina el mini server]: ``docker-compose down``
- Chequea los contenedores que estan encendidos: ``docker-compose ps``

### Checkear las variables de entorno que esta ejecutando symfony
```php
> symfony var:export --multiline
```

### Antes de empezar a trabajar siempre tendremos que hacer:
```php
> docker-compose up -d
```