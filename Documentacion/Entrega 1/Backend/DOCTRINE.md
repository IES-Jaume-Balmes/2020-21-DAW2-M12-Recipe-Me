# INSTRUCCIONES DOCTRINE

- Para resetear de 0 la base de datos usaremos
```
symfony console doctrine:database:drop --force
```


### Configuramos la base de datos accediendo al archivo ./env
    - DATABASE_URL=mysql://USUARIO:CLAVE@127.0.0.1:3306/DB_NOMBRE?serverVersion=5.7
    - php bin/console doctrine:database:create <-- Crea la DB
    - php bin/console doctrine:schema:update --force <-- Crea las tablas con los Entity