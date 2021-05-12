---
title: "Instrucciones Fixtures"
date: 2021-05-11T19:58:18+02:00
draft: true
---


Las **Fixtures** o **Utilidades** son ``scripts php`` en nuestro proyecto ``Symfony`` que nos ayudan a realizar tareas de testeo y desarrollo de nuestra web app.

## Creacion:
Para crear una Fixture lo haremos con el comando:
```php
bin/console make:fixture
```

Podemos crear tantas como queramos. Es recomendable crear un archivo **Fixture** para cada tabla que queramos rellenar, de este modo el codigo quedará mas legible.

La dirección de los archivos la encontraremos en ``AppSymfony/src/DataFixtures/``

## Interrelacion:
Para insertar **Datos** que dependen de otros **Datos** lo hacemos mediante referencias.

**Ejemplo**:
- Queremos generar una ``receta`` que contiene ``ingredientes``:
    1. Cuando vamos a insertar un **ingrediente**, le añadimos un ``String`` de para referirnos al mismo.
    2. En **RecetasFixture** vamos a añadir una función para que recoja las referencias generadas en ingredientes.
    3. Cuando vamos a crear una **receta** le pasamos un ingrediente por referencia (el ``String`` que le hemos añadido al **ingrediente** en primera instancia).

## Aplicación:

Nosotros hemos creado 4 clases que se encargan de rellenar nuestra **DB** con datos falsos pero posibles.

Las ejecutamos en el terminal:
```php
symfony console doctrine:fixtures:load
```

## FakerPHP:
FakerPHP es una libreria que nos permite generar datos aleatorios para poblar nuestra base de datos.

> Comida:
https://github.com/jzonta/FakerRestaurant

> Mas variedad de datos:
https://packagist.org/packages/mbezhanov/faker-provider-collection