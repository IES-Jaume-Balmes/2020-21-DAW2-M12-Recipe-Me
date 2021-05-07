# INSTRUCCIONES FIXTURES
___

Las **Fixtures** o **Utilidades** son ``scripts php`` en nuestro proyecto ``Symfony`` que nos ayudan a realizar tareas de testeo y desarrollo de nuestra web app.

## Creacion:
Para crear una Fixture lo haremos con el comando:
```php
bin/console make:fixture
```

La dirección de los archivos la encontraremos en ``AppSymfony/src/DataFixtures/``

## Interrelacion:

Nosotros hemos creado 4 clases que se encargan de rellenar nuestra **DB** con datos falsos pero posibles.

Las ejecutamos en el terminal:
```php
symfony console doctrine:fixtures:load
```