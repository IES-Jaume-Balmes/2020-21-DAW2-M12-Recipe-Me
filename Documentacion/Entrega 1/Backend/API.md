# INSTRUCCIONES BACKEND

TUTORIAL: https://symfonycasts.com/screencast/api-platform/json-ld#play

### Pasos para crear nuestra API:

1. Creamos un proyecto symfony: 
> symfony new nom_proj
2. Añadimos dependencia: 
> composer require api
3. Añadimos utilidades: 
> composer require maker --dev
4. Creamos las entidades que necesitemos: 
> bin/console make:entity``
5. Encendemos el servidor: 
> symfony serve -d
6. Para pararlo usaremos:
> symfony server:stop