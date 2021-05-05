#Pasos para hacer el run local
1. Crear base de datos en local
2. La base de datos se ha de llamar serious_api
3. modificar .env poner credenciales y quitar lo que viene despues del ?
4. hacer un ``composer install``
5. hacer bin/console make:migration
6. (NO) hacer un bin/console doctrine:migrations:migrate

Run con Docker
0. Ponerse en la carpeta donde está el docker-compose.yaml
1. Hacer un ```docker-compose up -d``` 
2. Hacer un ```docker-compose ps``` para comprobar que está bien.
2. Hacer un ```symfony console doctrine:migrations:migrate``` para comprobar que está bien.
## Crear usuario
1. Up de la api ```symfony serve```
2. Entrar a localhost:8000
3. Crear un usuario, la contraseña se ha de encriptar antes
4. ``bin/console security:encode-password``
5. poner la contraseña para que se encripte.
6. ya se puede usar /login