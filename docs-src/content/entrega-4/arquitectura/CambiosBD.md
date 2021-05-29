---
title: "Cambios en BDD"
date: 2021-05-29T11:08:25+02:00
draft: true
---
## Quitamos
La **tabla roles** carece de utilidad ya que finalmente los roles de usuario quedan directamente almacenados en la **tabla usuario** en formato `array`.

## Añadimos
- **Columna roles** en la **tabla usuario**.
- **Columna createdAt** en la **tabla recetas**.
- Nueva tabla **refresh_tokens** autogenerada automaticamente por el paquete [markitosgv](https://github.com/markitosgv/JWTRefreshTokenBundle). Contiene información del token de refresco: fecha de validez, nombre de usuario, id del token y el token en si.

## Modificamos
Nomenclatura para algunas columnas para hacerlo mas entendible.

![Mapa base de datos](/2020-21-DAW2-M12-Recipe-Me/BBDDfinal.png)