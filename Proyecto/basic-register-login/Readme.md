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
    - php bin/console make:form
    - Nos preguntara a que Entity va asociado. Le ponemos User.
    - De nombre el que queramos.
    - Vamos a ./src/Form/nuestro_form:
    - en caso de duda copiamos el del tutorial:
    - https://stackoverflow.com/questions/46734428/symfony-check-if-user-exist-in-database/46738306

## Creamos el login
    - php bin/console make:auth 
    - Respondemos de manera logica a los parametro.
    - Le asignamos como controlador la clase SecurityController que hemos creado antes.
    - Vamos a ./src/Controllers/SecurityController y cambiamos la ruta por defecto y que sea nuestro index (/)

4. Configuramos la base de datos accediendo al archivo ./env
    - DATABASE_URL=mysql://USUARIO:CLAVE@127.0.0.1:3306/DB_NOMBRE?serverVersion=5.7
    - php bin/console doctrine:database:create <-- Crea la DB
    - php bin/console doctrine:schema:update --force <-- Crea las tablas con los Entity


5. Vamos a config/packages/security.yaml y asignamos como ruta del "logout" la raiz (/)

6. Finalmente falta crear la vistas para el usuario. Esto lo podemos hacer con react, o con el pseudo-framework
que usa el tutorial: Twig. La verdad es que se integra muy bién con esta aplicacion.
- Recomiendo copiar y pegar el del tutorial y luego entenderlo.
- Copiar y pegar el del tutorial no hara que la app se vea como las fotos del tutorial.
- Se tienen que colocar un par de IFS (en los TWIG) para evitar que la app pete. Por ejemplo:
    - En ./templates/security/login.html.twig
    - Este template nos dara problemas, porque accede a variables globales (error y user) que
    en un determinado momento són NULL. Tenemos que decirle que solo acceda al contenido si estas
    variables no són nulas.
- Finalmente, tendremos que añadir una función para cuando el usuario se identifique correctamente.

// src/Security/LoginFormAuthenticator

public function onAuthenticationSuccess(Request $request, TokenInterface $token, $providerKey)
{
    if ($targetPath = $this->getTargetPath($request->getSession(), $providerKey)) {
        return new RedirectResponse($targetPath);
    }

    return new RedirectResponse($this->urlGenerator->generate('list'));
}
    


## RECURSOS PARA DUDAS
- https://symfony.com/doc/current/security.html
- https://symfony.com/doc/current/security/form_login_setup.html
- https://symfony.com/doc/current/configuration/secrets.html
- https://stackoverflow.com/questions/46734428/symfony-check-if-user-exist-in-database/46738306
- https://auth0.com/blog/creating-your-first-symfony-app-and-adding-authentication/
