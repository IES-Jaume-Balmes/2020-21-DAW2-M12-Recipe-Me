---
name: Aplicacion
---

# Circuito de la aplicación

Para llevar a cabo nuestra idea primeramente hemos pensado en realizar un registro/login para que el usuario pueda, entrar a través del portal o registrarse.

## Login

Se compone de dos inputs:

1. Campo Username (Correo electrónico)
2. Campo Password.

A nivel de código el Login tiene una variable de estado que controlará los inputs y los cambios en este. Que serán el email y el password.

### Funciones

- handleChange: Controla los cambios que se produzcan en los inputs y actualiza la variable de estado form con los datos actualizados.

- iniciarSesion: Esta función es llamada al clickar en el Boton de "Ingresar!", lo que hace la función es hacer una petición ajax con la dependencia "axios" a la url de la api

```js
const baseUrl = "https://localhost:8000/login";
```

A esta ruta se le envia los datos de usuario por POST en un json

```js
let jsonPeticion = {
  email: this.state.form.email,
  password: this.state.form.password,
};
```

Si el Loggin se ha hecho correctamente la respuesta de la API es un json con un id de user y el nombre del usuario, lo que guardamos en una cookie ayudados por la librería "universal-cookie"

Si la validación de usuario no ha sido correcta se muestra un alert con la información "Contraseña o usuario incorrecto" para no dar pistas a un posible atacante sobre qué es lo que ha ido mal.

Una vez todo a salido correctamente se redigirá al usuario a la página main de la aplicación

```js
window.location.href = "./main";
```

- registrarse: Este método es llamado cuando se da click al boton de registrarse, lo único que hace es rederigir al usuario a la página de Registro

- componentDidMount: está función se encarga de comprobar si existe un usuario logeado a través de las cookies disponibles, si la cookie existe significa que hay un usuario loggeado y lo redirige automaticamente a la mantalla main.

## Registro

Se compone de cuatro inputs:

1. Email
2. Nombre Completo
3. Contraseña
4. Repetir Contraseña

Al igual que el loggin, el Register tiene una variable de estado para controlar los inputs que se cumplimentan.

### Funciones

- handChange: Controla los cambios que se produzcan en los inputs y actualiza la variable de estado form con los datos actualizados.

- registrarse: Este método crea primero un json a partir de los datos extraidos del formulario, estos datos aún no están validados.

```js
let jsonPeticion = {
  email: this.state.form.email,
  username: this.state.form.nombre,
  password: md5(this.state.form.password),
};
```
Luego se realiza una petición a la API al endpoint
```js
const baseUrl = "http://localhost:8000/users";
```
Si todo va bien el usuario será redirigido a la pantalla de Loggin para que pueda conectarse a su Perfil.

Si algo sale mal le aparecerá un alert con el texto "Ha ocurrido un error"

## Main

El usuario no podrá acceder al main sin ser validado anteriormente.

Si el usuario intenta entrar al main directamente será rederigido a la pantalla de Login.

El main contiene 3 divs:

### 1 Sidebar.js (Component)

Este componente renderiza un mapeo de la array que esta en sidebarData.js.

- SidebarData contiene la información de los directorios junto a su path para cuando desde el main cliquemos en el vaya a la ruta que necesita.

- Este sidebar es pintado en el apartado ./css/main.css

```

```
