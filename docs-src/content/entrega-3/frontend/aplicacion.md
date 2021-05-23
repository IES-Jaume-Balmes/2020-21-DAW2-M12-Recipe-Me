# TarjetaListaActual.js

## Obstaculos

- Se ha encontrado un error al mostrar la lista de la compra por primera vez, al no existir una lista de la compra en una cookie, al hacer un .map el código peta al ser null. Este problema estaba gestionado en versiones anteriores pero se elimino en algún punto. Se ha vuelto a introducir el codigo que controla esa condición, si no existe cookie enviará el siguiente mensaje.

```js
else {
    return <div>Añade Ingredientes A la lista de la compra!!!</div>;
  }
```

# Usuario.js
## Actualización
- Añadido un diálogo  y un nuevo botón para que el usuario se pueda dar de baja en dos pasos ya que si pulsa el botón sin querer tenga que volver a presionar otro botón para darse de baja. El botón si del diálogo borra al usuario de la base de datos, la cookie y lo devuelve al /login.
- Cambio a la hora de recoger la información de la api y mostrarla en el componente con Fetch y pasarlo a axios.
## Obstaculos

- Al desconectarse un usuario y conectarse con otro, si entraba a la lista de la compra aparecía la lista de la compra del usuario anterior. Esto ocurria ya que la cookie se guardaba en local y no habia una gestión de privacidad de esa cookie. Lo que se ha hecho es eliminar esa cookie al hacer logout

```js
cookie.remove("ingredientes", { path: "/" });
```

- Se corrigió un pequeño bug que hacia que la app petara al entrar a las listas de la compra y no hubiera ingredientes añadidos

```js
- if (list.length !== 0) {
+ if (list !== undefined) {
```
- Pase de datos de componente, hemos tenido problemas al cambiar de Fetch a axios ya que el componente desconocía los datos  y los pedía antes que la función los recibiera. Falta por qué la función borre todas las recetas del mismo usuario.

# SignUpSide.js

## Actualización

- Ahora la API encripta las contraseñas que se le envian an registrarse, con lo cual ya no hace falta encriptarlas desde frontend. Se ha eliminado la dependencia md5 del package.json

- Ahora el UserName ya no es un nombre de usuario sino un nombre completo de la persona, ya que el usuario se loggeaba con el email y no con el user y causaba confuciones.

## Obstaculos
- Se encontro el fallo que hacía que las animaciones del login y el register no fuera correctas, Material UI estaba teniendo incompatibilidades con el paquete `bootstrap` así que se procedió a eliminarlo del proyecto.

# SignInSide.js

## Actualización
- Ahora si el usuario o la contraseña no son correctos no sale un alert de windows, sino que los input de email y contraseña se ponen en rojo y aparece un mensaje informando que el usuario o la contraseña no son correctos.

# CrearReceta.js

## Actualización

- Crear receta ya es funcional, de momento se recibe una respuesta de la API la cual se muestra por consola y a nivel de usuario se muestra un `alert`, que posteriormente se cambiará.

## Obstaculos

- Encontramos dificultades a la hora de captar los datos del formulario de crear receta ya que uno de los datos era una array de objetos, con lo cual no servia la formula:

```js
await this.setState({
  form: {
    ...this.state.form,
    [e.target.name]: e.target.value,
  },
});
````

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

- A la hora de crear el json de `POST` para la API, se necesitaba solo el String con el Id de los ingredientes, con lo cual se hizo un mapeo a los datos de los ingredientes:

```js
let arraySoloId = this.state.form.ingredients.map((i) => i.value);
```

# Recetas.js

## Obstaculo

- A la hora de crear la tarjetas de las recetas en el menú principal, se creaban correctamente pero se generaba un error a causa de que estás tarjetas no tenian una Key, que en react es obligatorio para elementos que se repitan, con lo que se utilizó el Id para identificarlas:

```js
key={element["@id"]}
```

# Utils/EventEmitter.js

- Se ha añadido un script para utilizar objeto EventEmitter
- Problema que soluciona: La barra de busqueda se encuenta en un componente muy alejado de la pantalla en la que se muestran las recetas por lo que era complicado pasar los parametros de forma convencional padre-hijo. Un EventEmitter nos permite `suscribe` a una variable la cual si es modificada envia con `dispatch` esta información

```js
const EventEmitter = {
  _events: {},
  dispatch: function (event, data) {
    if (!this._events[event]) return;
    this._events[event].forEach((callback) => callback(data));
  },
  subscribe: function (event, callback) {
    if (!this._events[event]) this._events[event] = [];
    this._events[event].push(callback);
  },
};
module.exports = { EventEmitter };
```

- Primero se ha creado un estado más en Drawer.js, donde está el buscador

```js
const [buscar, setBuscar] = React.useState("");
```

La barra de busqueda emitirá los datos a los subscriptores cuando haya cambios en su value

```js
onChange={(e)=>EventEmitter.dispatch('buscar', e.target.value)}
```

- Luego en el archivo Receta.js, que es el que pasa una array de objetos de tipo receta al componente que los renderiza, creamos un estado más

```js
busquedaRecetas: [],
```

- En la función componentDidMount(), se define el EventEmitter subscriptor

```js
EventEmitter.subscribe("buscar", (event) => {
  this.mapearBusqueda(event);
});
```

- La palabra a buscar llegará en el evento, al cual se le pasa un callback y llamamos a la función mapearBusqueda()

```js
mapearBusqueda(palabraABuscar){
    let nuevoRecetas = this.state.recetas.filter((elemento)=>{
      return elemento.name.toLowerCase().includes(palabraABuscar)
    })
    this.setState({busquedaRecetas: nuevoRecetas})
  }
```

- Esta función crea una nueva array que filtrará la array completa de recetas y nos devolverá las recetas cuyo nombre contenga la palabra buscada

## Obstaculos

- Al principio `nuevaRecetas` se setteaba directamente en recetas, modificando el array originas, el problema venía al borrar del buscador, está palabra se buscaba en la array reducida, el array con todas las recetas se perdía completamente. Por esta razón se creo el estado `busquedaRecetas` el cual se settea al principio igual que `recetas`, `recetas` permanecerá inmutable mientras `busquedaRecetas` será la que cambiará y se pasará al componente para ser renderizado.

# TarjetaLista.js

- Se ha modificado para que reciba en el `props` el callback del padre llamado `eliminar`, este callback es renderizado en cada tarjeta de lista de la compra guardado, para que hacer click en el boton de eliminar envie a la al padre el `id` de la lista que se quiera eliminar

# Lista.js

## Actualizaciones

- Se ha añadido la función

```js
eliminar = (id) => {
  const newList = this.state.listas.filter((item) => {
    return item["@id"] !== id;
  });
  this.setState({ listas: newList });
};
```

la cual se pasa al componente hijo TarjetaLista.js como parametro

```js
<TarjetaLista key={element["@id"]} lista={element} eliminar={this.eliminar} />
```

Para eliminarlo de la base de datos se ha añadido una petición `axios` a la API

```js
axios.delete(baseDeleteUrl + id.split("/")[2]);
```

- Se hizo un `.split` al id porque llegaba la dirección y solo necesitabamos el id.
- El usuario puede añadir listas de la compra haciendo con el añadir lista compra, le pasamos el nombre de la lista actual como nombre el propietario lo recogemos con el cookie.get("User") y los ingredientes los recogemos solamente el id para añadirlos a la database.
- Cambio del botón guardar lista de la compra ya que queríamos poder hacer scrolling dentro de ese div sin necesidad de tener una página más grande que nuestra barra de menú lateral. Paseo de parámetro de componente hijo a padre (callback) para poder mandarle los ingredientes de la lista para añadirlos.

## Obstáculos:
- Falta por desarrollar que cuando se añada correctamente la lista se actualice de manera automática a la página y no tengas que volver a cargar el componente para ver si se ha añadido correctamente. Problemas a la hora de recoger la lista de la compra y pedirle todos los ingredientes (aún no está desarrollada esa parte).