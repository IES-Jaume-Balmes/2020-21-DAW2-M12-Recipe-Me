# Instrucciones formulario login Symfony
## Tutorial youtube:
### https://www.youtube.com/watch?v=1lKHlYeusgQ

1. TERMINAL: symfony new nombre_proyecto

2. Configurar database:
    * Vamos al archivo ./.env y descomentamos la base de datos que vamos a utilizar.
    * DATABASE_URL="mysql://USUARIO:CONTRASEÑA@127.0.0.1:3306/DATABASE_NOMBRE?serverVersion=5.7"
    * Borramos las otras para que no se confunda.

3. Insertamos en el terminal del proyecto:
    * composer require symfony/security-bundle
    * bin/console make:user
    * bin/console make:migration

4. Conectamos con la base de datos:
    * bin/console doctrine:migrations:migrate
    * bin/console make:auth

5. En ./config/packages/security.yaml añadimos:  
access_control:   
        - { path: ^/login$, roles:  IS_AUTHENTICATED_ANONYMOUSLY }  
        - { path: ^/*, roles: ROLE_USER }  
        - { path: ^/admin, roles: ROLE_ADMIN }

6. Conectamos con base de datos:
    - composer require --dev orm-fixtures
    - bin/console doctrine:fixtures:load

En la base de datos se guardaran los usuarios junto con un contraseña cifrada.