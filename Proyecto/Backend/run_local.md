# Pasos para hacer el run local
1. Ponerse en el directorio serious_resful_api
4. hacer un ``composer install`` (Se necesita el .env)
5. En caso de no funcionar probar con el siguiente comando ```symfony composer update```
6. Hacer un ``symfony serve``
# Run con Docker
0. Ponerse en la carpeta donde está el docker-compose.yaml
1. Hacer un ```docker-compose up -d``` 
2. Hacer un ```docker-compose ps``` para comprobar que está bien.
2. Hacer un ```symfony console make:migration```
2. Hacer un ```symfony console doctrine:migrations:migrate``` para comprobar que está bien.
3. Cargar base de datos de test ```symfony console doctrine:fixtures:load``` luego ``yes``
6. Hacer un ```symfony server:ca:install```