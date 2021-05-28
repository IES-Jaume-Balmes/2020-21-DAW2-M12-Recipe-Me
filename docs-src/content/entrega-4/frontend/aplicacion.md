# Listas.js

## Actualización

- Ahora es responsive, se tuvo que introducir a componentes Grid que hacian un mejor manejo del css-grid
- Al guardar una lista de la compra mostraba un alert predeterminado de Chrome, ahora tiene un componente Snackbar que muestra una alerta cuando una Lista de la compra a sido añadida correctamente.

```js
<Snackbar
  anchorOrigin={{ vertical: "top", horizontal: "center" }}
  open={this.state.open}
  autoHideDuration={6000}
  onClose={() => {
    this.setState({ open: false });
  }}
>
  <Alert
    onClose={() => {
      this.setState({ open: false });
    }}
    severity="success"
  >
    Lista añadida correctamente!
  </Alert>
</Snackbar>
```

El funcionamiento es sencillo, se crea una variable de estado a `false`, y en la función `guardarListaCompra` cuando la respuesta de la API es correcta, cambia el valor de `open` a `true`. Luego el alert se cerrará automaticamente después de 6 segundos o cuando el usuario le de al boton de cerrar.

- Se ha cambiado el nombre de la variable de estado `textField` por `nombreLista` ya que la primera no definia correctamente la función de esa variable.
- Se ha introducido la variable de estado `arrayIngredientes`, antes se utilizaba solo `arrayIngres` que eran los ingredientes guardados en un cookie, ahora al estar en una variable de estado es más fácil controlar el renderizado de los componentes que dependen de la lista de ingredientes.
- Se ha añadido la función `actualizarLista()`:

```js
actualizarLista = (id) => {
  const newList = this.state.arrayIngredientes.filter((item) => {
    return item.id !== id;
  });
  this.setState({ arrayIngredientes: newList });
};
```

Esta función se le pasa como parametro al componente `TarjetaListaActual` la cual controla si un elemento de la lista de ingredientes es eliminado. (callback)

- Se ha añadido la función `cargarListaGuardada()`:

```js
cargarListaGuardada = (lista) => {
  this.setState({ nombreLista: lista.name });
  this.setState({ arrayIngredientes: lista.ingredients });
};
```

Que se encarga de actualizar las variable de estado de nombre y lista de ingredientes en la parte de `TarjetaListaActual` para al hacer clic en una lista guardada se cargue automaticamente en la `TarjetaListaActual`

- Se ha añadido un boton para copiar la lista de la compra, que se está visualizando, en el portapapeles. Para esto se ha añadido un boton con la función en el parametro ``onClick``:

```js
{
  let texto = "";
  this.state.arrayIngredientes.forEach((item) => {
    return (texto += "\n- " + item.name);
  });
  navigator.clipboard.writeText(texto);
}
```

# TarjetaListaActual.js

## Actualización

- Ahora recive como `props` la función `actualizarLista` a través del parametro `actualizar`
- Se ha añadido la función de react `useEffect()` para que al recibir una actualización de la lista de ingredientes vuelva a rendedizar los contenidos de dicha Array:

```js
useEffect(() => {
  setList(props.arrayIngres);
}, [props.arrayIngres]);
```

- Se ha modificado la función `handleRemove` para que simplemente llame a la función que se le paso como parametro desde el componente padre y le pase como parametro el id del ingrediente a eliminar:

```js
const handleRemove = (id) => {
  actualizar(id);
};
```

# TarjetaLista.js

## Actualización

- Ahora recibe como `props` la función `cargarListaGuardada` para que al clickar en cada una de las listas guardadas devuelva en el callback la lista clickada, así se actualizará `TarjetaListaActual` actomaticamente:

```js
<ListItem onClick={()=>{cargar(lista)}}>
```

# Index.js

## Actualización

- Se ha eliminado el tag StrictMode ya que estaba generando un error en la consola del navegador.

# CrearReceta.js

## Actualización

- También se ha modificado el alert que tenía al igual que Listas.js

# SingUpSide.js

## Actualización

- Ahora se comprueba que el email sea válido, se han creado las variables de estado correspondiente

```js
const [errorEmail, setErrorEmail] = useState(false);
```

Y junto a un evento `onBlur={(e)=>comprobarEmail(e.target.value)}`.
Se compueba en la siguiente función si el email es valido

```js
const comprobarEmail = (email) => {
  if (email === "" || email.indexOf("@") === -1 || email.indexOf(".") === -1) {
    return setErrorEmail(true);
  }
  return setErrorEmail(false);
};
```

- Ahora se comprueba que el nombre no esté vacío, se han creado las variables de estado correspondiente

```js
const [errorNom, setErrorNom] = useState(false);
```

Y junto a un evento `onBlur={(e)=>comprobarNom(e.target.value)}`.
Se compueba en la siguiente función si el nombre no está vacío

```js
const comprobarNom = (nom) => {
  if (nom.trim() === "") {
    return setErrorNom(true);
  }
  return setErrorNom(false);
};
```

- Ahora se comprueba que la contraseña tenga 6 digitos, más una mayuscula y un numero como mínimo.
  Y junto a un evento `onBlur={(e)=>comprobarPass(e.target.value)}`.
  Se compueba en la siguiente función si la contraseña es valida

```js
const comprobarPass = (pass) => {
  const regexPass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
  if (!regexPass.test(pass)) {
    return setErrorPass(true);
  }
  return setErrorPass(false);
};
```

- Ahora se comprueba que las contraseñas coincidan, se han creado las variables de estado correspondiente

```js
const [errorPassRep, setErrorPassRep] = useState(false);
```

Y junto a un evento `onBlur={(e)=>comprobarPassRep(e.target.value)}`.
Se compueba en la siguiente función si las contraseñas coinciden

```js
const comprobarPassRep = (pass) => {
  if (pass !== password) {
    return setErrorPassRep(true);
  }
  return setErrorPassRep(false);
};
```

## Usuario

Cambio de botones de Usuario Cerrar sesión y darse de baja a Tarjeta Usuario para tenerlo todo centralizado y en la misma card para tener un diseño mejor.

Hemos llamado a las funciones del componente padre

```
Usuario.js
```

para simplemente cambiar de componentes estos botones.

Al tener el token para nuestro componente ya sea para cargar su información o darnos de baja necesitaremos pasarle el token por el header

```js
.get(profileEndpoint, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
```

Añadido al usuario datos de sus listas y los ingredientes que ha utilizado en estas.
Se han añadido estos datos dentro de UsuarioCard.
Cuando la api nos devuelve la información le pasamos una función la cual setea al estado el número con la información del usuario sobre los ingredientes y las listas. Después simplemente se las pasamos al componente hijo con los "props" y alil lo pintamos de esta manera.

## Crear receta

- No se podrán añadir recetas a no ser que contenga nombre, descripción e ingredientes.

```
  validateForm() {

    if(this.state.form.name.length > 0 && this.state.form.description.length > 0 && this.state.form.ingredients.length > 0)
      return true;

  }
```

Esta función chequeará si se puede añadir la receta. Después reseteara todos los campos para que el usuario pueda volver añadir otra.

## RecipeCard.js

- Hemos añadido la funcionalidad para poder darle like. Podemos dar y quitar el like esta funcionalidad esta por desarrollar veremos si nos da tiempo a poder terminarla.

```js
const [like, setLike] = useState(false);

<IconButton aria-label="add to favorites" color={like ? 'secondary' :"default"} onClick={() => setLike(!like)}>
```

- Ahora la función que crea la cookie ya no llama `nombre` al nombre del ingrediente sino `name`, para que sea igual que lo que devuelve la API.
- Ahora al clickar en el boton del carrito para añadirlo a la lista de la compra sale un mensaje en la parte superior avisando que los ingredientes han sido añadidos correctamente. Para esto se ha creado una nueva variable de estado `const [open, setOpen] = useState(false);` y se ha ingregrado los componentes `Snackbar` y `Alert`:

```js
<Snackbar
  anchorOrigin={{ vertical: "top", horizontal: "center" }}
  open={open}
  autoHideDuration={6000}
  onClose={() => {
    setOpen(false);
  }}
>
  <Alert
    onClose={() => {
      setOpen(false);
    }}
    severity="success"
  >
    Ingredientes añadidos correctamente!
  </Alert>
</Snackbar>
```

- Podemos marcar nuestras recetas como favoritas con una estrella que cuando la clicamos se pone en amarillo, en un futuro nos gustaría que puedes mirarlas como favoritas.... 
