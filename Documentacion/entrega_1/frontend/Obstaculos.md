## PROBLEMAS

## Error from chokidar (macOS)
Al hacer ``npm start`` me aparecen varias líneas con un error que hace referencia a ``chokidar``.

Lo he solucionado eliminando la carpeta entera de ``node_modules`` y reinstalandola con ``npm install``.

## Error con fetch (biblioteca nativa para hacer peticiones Ajax de JS)
Al hacer la petición con Fetch el servidor para realizar el loggin, el servidor no respondía, pero al hacer la petición desde un recurso externo como Postman, la petición si que se llevaba a cabo correctamente. Por lo que se decidió cambiar de herramienta de petición ajax a "Axios". Con esta librería si que se hizo la petición correctamente y se pudo hacer el loggin con el usuario correspondiente.

## No comprobación de la contraseña al registrarse
El input de repetir contraseña aún no comprueba que la contraseña del primer input sea la misma que la contraseña repetida