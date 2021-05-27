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
const comprobarPassRep = (pass)=>{
    if(pass !== password) {

      return setErrorPassRep(true)
   
    }
    return setErrorPassRep(false)
  }
```


## Usuario
Cambio de botones de Usuario Cerrar sesión y darse de baja a Tarjeta Usuario para tenerlo todo centralizado y en la misma card para tener un diseño mejor.

Hemos llamado a las funciones del componente padre
```
Usuario.js
```

para simplemente cambiar de componentes estos botones. 

Al tener el token para nuestro componente ya sea para cargar su información o darnos de baja necesitaremos pasarle el token por el header

``` js
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
No se podrán añadir recetas a no ser que contenga nombre, descripción e ingredientes.

```
  validateForm() {

    if(this.state.form.name.length > 0 && this.state.form.description.length > 0 && this.state.form.ingredients.length > 0)
      return true;
    
  }
```
Esta función chequeará si se puede añadir la receta. Después reseteara todos los campos para que el usuario pueda volver añadir otra.

## RecipeCard.js
Hemos añadido la funcionalidad para poder darle like. Podemos dar y quitar el like esta funcionalidad esta por desarrollar veremos si nos da tiempo a poder terminarla.

```js
const [like, setLike] = useState(false);

<IconButton aria-label="add to favorites" color={like ? 'secondary' :"default"} onClick={() => setLike(!like)}>
```
