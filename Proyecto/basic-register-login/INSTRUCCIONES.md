# INSTRUCCIONES LOGIN-REGISTER

1. Creamos el proyecto.
    - symfony new nombre_proyecto

2. Añadimos las recetas que vamos a necesitar:
    - composer require doctrine/doctrine-bundle
    - composer require doctrine/orm
    - composer require symfony/form
    - composer require symfony/maker-bundle
    - composer require symfony/security-bundle
    - composer require symfony/twig-bundle
    - composer require symfony/validator
    - composer require symfony/web-profiler-bundle
- Hay mas, pero en principio, el resto ya vendran por defecto.

3. Creamos los archivos necesarios con el maker de symfony.
- Creamos los controladores (las templates para cada uno se crearan automaticamente):
    - php bin/console make:controller DemoController
    - php bin/console make:controller RegistrationController
    - php bin/console make:controller SecurityController

## Creamos la entidad Usuario
    -> php bin/console make:user

    - Queremos almacenar su informacion en la base de datos (contestamos yes).
    - Accedemos a ./src/entity/User Añadiremos el parametro name, junto con getter y seter respectivos
    - Pasaremos informacion como atributo de la entidad, como comentario:    

    /**
    * @ORM\Entity(repositoryClass=UserRepository::class)
    * @UniqueEntity(
    * fields={"email"},
    * errorPath="email",
    * message="Este usuario ya se encuentra en uso."
    * )
    */
    class User implements UserInterface


## Creamos el formulario de registro
    - php bin/console make:form <-- Configurar

## Creamos el login
    
    - php bin/console make:auth <-- Configurar

4. Configuramos la base de datos accediendo al archivo ./env
    - DATABASE_URL=mysql://USUARIO:CLAVE@127.0.0.1:3306/DB_NOMBRE?serverVersion=5.7
    - php bin/console doctrine:database:create <-- Crea la DB
    - php bin/console doctrine:schema:update --force <-- Crea las tablas con los Entity



4. Modificamos la ruta por defecto cuando accedemos a "Logout"
    


## RECURSOS PARA DUDAS
- https://symfony.com/doc/current/security.html
- https://symfony.com/doc/current/security/form_login_setup.html
- https://symfony.com/doc/current/configuration/secrets.html
- https://stackoverflow.com/questions/46734428/symfony-check-if-user-exist-in-database/46738306
- https://auth0.com/blog/creating-your-first-symfony-app-and-adding-authentication/