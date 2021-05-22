#!/bin/bash

cd ./Proyecto/Backend
pwd \

composer update
composer install

cd ../Frontend
pwd \

npm update
npm install