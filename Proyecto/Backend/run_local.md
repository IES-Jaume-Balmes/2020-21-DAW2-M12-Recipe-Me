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
1. Hacer un ```docker-compose ps``` para comprobar que está bien.