#!/bin/bash

cd ./Proyecto/Backend
pwd \

symfony console doctrine:database:drop --force
y
symfony console doctrine:database:create
symfony console doctrine:schema:create
symfony console doctrine:fixtures:load



