---
name: Aplicacion
---

# Circuito de la aplicación

Para llevar a cabo nuestra idea primeramente hemos pensado en realizar un registro/login para que el usuario pueda, entrar a través del portal o registrarse. 

## Login 
Se compone de dos inputs:

1. Campo Username (Correo electrónico)
2. Campo Password.

## Registro

Se compone de cuatro inputs:

1. Email
2. Nombre Completo
3. Contraseña
4. Repetir Contraseña

## Main 

El usuario no podrá acceder al main sin ser validado anteriormente.

El main contiene 3 divs:

### 1 Sidebar.js (Component)

Este componente renderiza un mapeo de la array que esta en sidebarData.js.

* SidebarData contiene la información de los directorios junto a su path para cuando desde el main cliquemos en el vaya a la ruta que necesita.

* Este sidebar es pintado en el apartado ./css/main.css



