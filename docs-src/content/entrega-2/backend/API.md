---
title: "API"
date: 2021-05-14T17:26:55+02:00
draft: true
---

## Añadidos

- Hacemos que el parametro `createdAt`de la entidad **Usuario** se costruya automáticamente des de backend. No es necesario introducirla des de frontend, pero se puede hacer.

- Entidad Receta -> Nuevo parametro fecha de creación. Usamos un método derivado de la dependencia `Carbon` para obtener los datos de una manera más legible. Ejemplo: `8 hours ago`.