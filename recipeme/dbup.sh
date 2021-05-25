#!/bin/bash

cd ./Proyecto/Backend
pwd \

composer update
docker-compose up -d
symfony console doctrine:database:drop --force
symfony console doctrine:database:create
symfony console --no-interaction doctrine:migrations:migrate
symfony console --no-interaction doctrine:fixtures:load
