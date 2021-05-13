# Login

Ahora los usarios se cargan desde la base de datos y se comprueba su autentificación. Para esto se está utilizando la librería `universal-cookie`, esta cookie se guardará al ser un login correcto.

# RecipeCards.js
se ha creado un boton de añadir a lista de la compra a cada receta

```jsx
<IconButton aria-label="add to Lista" onClick={anadirLista}>
  <AddShoppingCartIcon />
</IconButton>
```
Este boton al ser clickado llama a la función ``anadirLista()`` que creará una cookie con los ingredientes de la receta clickada

## Obstaculo
Al intentar guardar la lista de los ingredientes utilizados en una receta se intento utilizar un EventEmitter para poder enviar los datos de componente a componente, ya que el componente emisor y el componente emisor no tenían una relación de padre-hijo ni siblings. Pero esta implementación no sirvió. Por lo que se optó por utilizar cookies, está solición además es una ventaja para el usuario, ya que al estar guardada la lista de la compra en una cookie, cuando el usuario pierda la sesión esta lista seguirá guardada.

# Listas.js
Se ha integrado un div más en el cual se pondrá la lista de la compra actual, que no estará guardada por defecto.
Este componente recoge los datos de la cookie y los muestra en la lista de la compra.

## Obstaculo
Se tuvo que corregir un error que se producía al entrar en en la lista y la cookie no existía. Introdución un condicional este error se solucionó
```js
if(cookie.get("ingredientes"))
```