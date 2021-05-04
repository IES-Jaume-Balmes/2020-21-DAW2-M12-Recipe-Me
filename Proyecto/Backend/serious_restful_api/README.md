# INSTRUCCIONS BASE

https://symfonycasts.com/screencast/api-platform/json-ld#play

1. symfony new nom
2. composer require api
3. composer require maker --dev
4. bin/console make:entity
5. symfony serve -d
6. check /api
7. enjoy


# INSTRUCCIONES DOCKER

1. Descargar docker desktop de la pagina oficial.
2. Ir a la carpeta donde queremos instalar contenedores.

## Vamos a instalar un contenedor con mysql (en su ultima versión):

1. Creamos un contenedor con mysql
```
bin/console make:docker:database 
```

2. Ejecutamos ``TODOS`` los contenedores disponibles. Tarda unos segundos en encenderlo todo.
```
docker-compose up -d
```
3. Accedemos a la base de datos
```
docker-compose exec database mysql -u root --password=password
```

## Terminar y eliminar contenedores

- Paramos los contenedores activos
```
docker-compose stop    
```
- Paramos contenedores y eliminamos su imagen por completo [elimina el mini server].
```
docker-compose down
```
- Chequea los contenedores que estan encendidos
```
docker-compose ps
```

## Checkear las variables de entorno que esta ejecutando symfony
```
symfony var:export --multiline
```

Antes de empezar a trabajar siempre tendremos que hacer:
```
docker-compose up -d
```