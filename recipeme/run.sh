#!/bin/bash

cd ./Proyecto/Backend
symfony serve -d

cd ../Frontend
npm start
