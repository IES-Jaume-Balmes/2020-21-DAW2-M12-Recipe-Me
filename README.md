# proyectoFinal

Proyecto Final de ciclo Daw

## Descargar el repositorio

Buenas chicos, para quien no se acuerde para bajar el repositorio teneis que:

1. Crear una carpeta nueva en local, con cualquier nombre.
2. Entrar en la carpeta, haced clic derecho y escoger "Git Bash Here" (Doy por supuesto que teneis el Git descargado (: ).
3. Cuando se habra la terminal escribid `git clone https://github.com/FrankPalomino/proyectoFinal.git .` (el punto es para que se copie todo en esa misma carpeta y no cree otra).
4. Ya tendreis el repositorio en local, ahora teneis que crear una nueva rama con `git checkout -b sergi` o `git checkout -b kevin`
5. Ahora podreis trabajar en vuestra rama.

## Guardar cambios realizados

Es importante que cada vez que tengais una pequeña parte que hayais comprobado que funcione guardar los cambios y subirlos:

1. En la carpeta raiz haced clic derecho y escoger "Git Bash Here". La carpeta raiz es la que tiene la carpeta ".git".
2. En la terminal escribid `git status` para comprobar que estais en la carpeta correcta y que hay cosas que no se han guardado, si habeis hecho modificaciones saldrán los archivos modificados, creado o eliminados en rojo.
3. Escribid en la terminal `git add .` para que lo pase todo a la Staging Area.
4. Ahora, solo para comprobar, volver a escribir `git status`, ahora los archivos deben salir en verde.
5. Ahora pasaremos los cambios Commit Area con `git commit -m "comentario del commit que indique el cambio que se ha hecho"`.
6. Ahora, solo para comprobar, volver a escribir `git status`, ahora los archivos han desaparecido porque ya están seguros en el commit.
7. Finalmente subiremos al repositorio online `git push origin kevin` o `git push origin sergi`.

## Ver los cambios de los demás

Próximamente...

## Pull Request

1. Después de hacer `git push origin sergi` entro a la web de github.
2. Aparece un baner amarillo que pone compare & pull request.
3. Accedo y escribo un mensaje de las cosas que he modificado.
4. Le doy al botón hacer pull request (petición de agregación).
5. Finalmente aparece una pantalla mostrando si hay conflictos o no con otros archivos.
   Si no hay conflictos le damos a -> Merge pull request

6. Ahora el main estará actualizado con lo que he añadido.
