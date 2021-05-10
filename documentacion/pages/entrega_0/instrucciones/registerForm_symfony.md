# INSTRUCCIONS REGISTRE

1. Crear el formulari de registre:
https://symfony.com/doc/4.2/doctrine/registration_form.html

2. Configurar base de dades
https://symfony.com/doc/current/doctrine.html#configuring-the-database
    - php bin/console doctrine:database:create
    - php bin/console make:entity
    - php bin/console make:migration
    - php bin/console doctrine:migrations:migrate
