# INSTRUCCIONES BACKEND

TUTORIAL: https://symfonycasts.com/screencast/api-platform/json-ld#play

### Pasos para crear nuestra API:

1. Creamos un proyecto symfony: ``symfony new nom_proj``
2. Añadimos dependencia: ``composer require api``
3. Añadimos utilidades: ``composer require maker --dev``
4. Creamos las entidades que necesitemos: ``bin/console make:entity``
5. Encendemos el servidor: ``symfony serve -d``
6. Ya podemos acceder a la api.


# INSTRUCCIONES DOCKER

- Descargar docker desktop de la pagina oficial.
- Ir a la carpeta donde queremos instalar contenedores.
- Lo instalamos para tener una base de datos en común, independiente de nuestra máquina.

### Instalamos un contenedor con mysql:

- Creamos un contenedor de mysql:
```
bin/console make:docker:database 
```

- Ejecutamos ``TODOS`` los contenedores disponibles. Tarda unos segundos en encenderlo todo.
```
docker-compose up -d
```
- Para acceder a la base de datos:
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


# INSTRUCCIONES DOCTRINE

- Para resetear de 0 la base de datos usaremos
```
symfony console doctrine:database:drop --force
```


# ERRORES COMUNES

Tubimos dificultades a la hora de testear el login de la pagina.

A la hora de testear la api asegurarse de guardar la contraseñas codificadas en la base de datos.
```
bin/console security:encode-password
```
Ejemplo:
- En base de datos guardamos: ``$argon2id$v=19$m=65536,t=4,p=1$zUZd7LRg219hXD44qgSEtg$1LR0AmBZjjovcXwztUyx7Jz2JbKE9CmBzHDuSHqF2HE``
- En el ``POST`` ponemos el password sin codificar