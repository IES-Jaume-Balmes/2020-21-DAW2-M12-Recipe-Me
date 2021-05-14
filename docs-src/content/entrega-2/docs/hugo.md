---
title: "Hugo"
date: 2021-05-14T16:10:23+02:00
draft: true
---

Template escogida:
https://geekdocs.de/usage/getting-started/#option-1-download-pre-build-release-bundle

Deployement:
https://gohugo.io/getting-started/quick-start/

### Crear nuevo archivo:
> `hugo new nombre_archivo`
> `hugo new directorio/nombre_archivo`

### Crear build en /docs:
Para hacer que la build se genere automaticamente en docs, hemos tenido que modificar el archivo de configuración `config.toml`. Añadimos la línea:
> `publishDir = "../docs"`

Para generar la build ejecutamos el comando:
> `hugo -D`

### Poner imagenes
1. Colocar imagen en `docs-src/static`
2. Enlazar la imagen con la ruta siguiente:
`/2020-21-DAW2-M12-Recipe-Me/imagen.jpeg`