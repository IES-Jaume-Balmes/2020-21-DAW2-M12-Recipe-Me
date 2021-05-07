# OBSTACULOS

Tuvimos dificultades a la hora de testear el login de la pagina, porque aún no habíamos implementado la
encriptación en el momento de insertar datos en la BDD y la herramienta de login encriptaba el password
automáticamente antes de hacer la comprobación con la BDD.

A la hora de testear la api asegurarse de guardar la contraseñas codificadas en la base de datos.
```
bin/console security:encode-password
```
**Correcto:**
- En base de datos guardamos: ``$argon2id$v=19$m=65536,t=4,p=1$zUZd7LRg219hXD44qgSEtg$1LR0AmBZjjovcXwztUyx7Jz2JbKE9CmBzHDuSHqF2HE``
- En el ``POST`` ponemos el password sin codificar

**Error:**
- Guardar en la base de datos un plain string:
> password