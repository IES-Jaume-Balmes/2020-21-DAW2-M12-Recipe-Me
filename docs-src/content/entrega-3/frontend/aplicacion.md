# TarjetaListaActual.js

## Obstaculos

- Se ha encontrado un error al mostrar la lista de la compra por primera vez, al no existir una lista de la compra en una cookie, al hacer un .map el código peta al ser null. Este problema estaba gestionado en versiones anteriores pero se elimino en algún punto. Se ha vuelto a introducir el codigo que controla esa condición, si no existe cookie enviará el siguiente mensaje.

```js
else {
    return <div>Añade Ingredientes A la lista de la compra!!!</div>;
  }
```

# Usuario.js

## Obstaculos

- Al desconectarse un usuario y conectarse con otro, si entraba a la lista de la compra aparecía la lista de la compra del usuario anterior. Esto ocurria ya que la cookie se guardaba en local y no habia una gestión de privacidad de esa cookie. Lo que se ha hecho es eliminar esa cookie al hacer logout

```js
cookie.remove("ingredientes", { path: "/" });
```

# SignUpSide.js

## Actualización

- Ahora la API encripta las contraseñas que se le envian an registrarse, con lo cual ya no hace falta encriptarlas desde frontend. Se ha eliminado la dependencia md5 del package.json

# CrearReceta.js

## Actualización

- Crear receta ya es funcional, de momento se recibe una respuesta de la API la cual se muestra por consola y a nivel de usuario se muestra un ``alert``, que posteriormente se cambiará.

## Obstaculos

- Encontramos dificultades a la hora de captar los datos del formulario de crear receta ya que uno de los datos era una array de objetos, con lo cual no servia la formula:

```js
await this.setState({
  form: {
    ...this.state.form,
    [e.target.name]: e.target.value,
  },
});
```

Para poder capturar los datos de este input y ponerlos en el `state` correspondiente se utilizo la función:

```js
await this.setState({
  form: {
    ...this.state.form,
    ingredients: e,
  },
});
```
De esta forma no se pierden los datos del formulario y se incluye la Array de objetos de los ingredientes
- A la hora de crear el json de ``POST`` para la API, se necesitaba solo el String con el Id de los ingredientes, con lo cual se hizo un mapeo a los datos de los ingredientes:
```js
let arraySoloId = this.state.form.ingredients.map((i) => i.value);
```
# Recetas.js
## Obstaculo
- A la hora de crear la tarjetas de las recetas en el menú principal, se creaban correctamente pero se generaba un error a causa de que estás tarjetas no tenian una Key, que en react es obligatorio para elementos que se repitan, con lo que se utilizó el Id para identificarlas:
```js
key={element["@id"]}
```