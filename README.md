# Proyecto final

Recipe-me 

*Se pronuncia* 📖 /ˈrɛsɪpimi'/

# Integrantes del proyecto ✒️
- Frank Palomino
- Kevin Rodríguez
- Sergi Francés

# Tutor
- Pepe Osca

# Run_build del proyecto 


Utilizamos puerto 8000 backend puerto 3000 frontend

## Pre-requisitos 📋 

* [Docker](https://www.docker.com/products/docker-desktop)
* [Symfony](https://symfony.com/download) 
* [React](https://reactjs.org/)
* [PHP](https://www.php.net/downloads.php) (Nos funciona con PHP 8.0.5)

## Instalación 🔧

Nos descargamos el proyecto en la carpeta que queramos tenerlo. 
```
git clone https://github.com/IES-Jaume-Balmes/2020-21-DAW2-M12-Recipe-Me.
```
Nos vamos a la rama developer para tener la version mas reciente del proyecto.
```
git checkout developer
```

### Empezamos ⚙️
Vamos a la carpeta del proyecto/Backend.

>Recordar siempre tener el sistema actualizado y no con versiones antiguas que nos puedan traer problemas futuros.

Antes de hacer un install, crear en la raiz del proyecto Backend un archivo ``.env`` con el siguiente contenido:

```
APP_ENV=dev
APP_SECRET=ac24bd1e7f80b5b0f2eeea7239c97cba
DATABASE_URL="mysql://root:2704@127.0.0.1:3306/serious_api"
CORS_ALLOW_ORIGIN='^https?://(localhost|127\.0\.0\.1)(:[0-9]+)?$'
```
 >Más información sobre el archivo ``.env`` en [Symfony](https://symfony.com/doc/current/best_practices.html#use-environment-variables-for-infrastructure-configuration).

Ahora ejecutamos el comando
```
composer install
```

Una vez actualizado procedemos a instalar el contenedor mysql (instala versión 8.0)

```
bin/console make:docker:database  || php bin/console make:docker:database
```

Nos preguntará el tipo de base de datos que queremos instalar [0] __mysql__ versión __latest__ y el __nombreBaseDeDatos__ que queramos ponerle.

Ejecutamos **TODOS** los contenedores disponibles.
```sudo docker-compose up -d```

Chequea que los contenedores estan encendidos

``` docker-compose ps```

Comprobamos que tenemos acceso a la base de datos que hemos creado previamente.
```
docker-compose exec nombreBaseDeDatos mysql -u root --password=password
```

Si tienes problemas con el comando anterior asegurate que el usuario root existe y tiene privilegios 


(en caso de que no)
```
CREATE USER 'root'@'%' IDENTIFIED BY password;

GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' WITH GRANT OPTION;
```


Empezamos con symfony
```
wget https://get.symfony.com/cli/installer -O - | bash
```

Creamos la base de datos en el docker
```
symfony console doctrine:database:create
```

Creamos una migración (sentencia SQL a la espera de ser ejecutada)
```
symfony console make:migration
symfony console doctrine:migrations:migrate
```

Cargamos los datos con ingredientes, recetas y usuarios

```symfony console doctrine:fixtures:load``` luego ``yes``


Instalamos el certificado de autoridad con

```symfony server:ca:install```


Levantamos el servidor
```symfony serve```

Vamos hacia arriba de la consola y entramos en *localhost:8000* para abrirla.


Una vez funcionando vamos a la carpeta frontend

borrar carpetas node_modules (en caso de que existan)


instalar nodepack manager
```npm install```

(en caso de error utilitzar los siguientes comandos)
sudo npm install -g n
sudo n latest

```npm start``` 

### En mi ordenador funcionaba

🎁🎁🎁Disfrutad de la magia 🎁🎁🎁