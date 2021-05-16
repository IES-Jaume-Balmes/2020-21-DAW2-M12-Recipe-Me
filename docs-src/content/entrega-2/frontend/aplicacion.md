# Login

Ahora los usarios se cargan desde la base de datos y se comprueba su autentificación. Para esto se está utilizando la librería `universal-cookie`, esta cookie se guardará al ser un login correcto.

# RecipeCards.js
se ha creado un boton de añadir a lista de la compra a cada receta

```jsx
<IconButton aria-label="add to Lista" onClick={anadirLista}>
  <AddShoppingCartIcon />
</IconButton>
```
Este boton al ser clickado llama a la función ``anadirLista()`` que creará una cookie con los ingredientes de la receta clickada.

- Los ingredientes eran pasados por nombre, no había gestión de los edpoints para que la crear la lista se hiciera la petición correcta con los endpoints de los ingredientes correspondiente. Ahora no solo se para los nombres de los ingredientes sino que también los endpoints en un array de objetos con la siguiente estructura.
```jsx
{
  id: "enpoint",
  nombre: "nombreIngrediente"
}
```

- Se ha modificado para que controle que los ingredientes no se repitan

## Obstaculos
Al intentar guardar la lista de los ingredientes utilizados en una receta se intento utilizar un EventEmitter para poder enviar los datos de componente a componente, ya que el componente emisor y el componente emisor no tenían una relación de padre-hijo ni siblings. Pero esta implementación no sirvió. Por lo que se optó por utilizar cookies, está solición además es una ventaja para el usuario, ya que al estar guardada la lista de la compra en una cookie, cuando el usuario pierda la sesión esta lista seguirá guardada.



Al controlar los ingredientes duplicados se comentó la linea que creaba la cookie, lo que ocacionó que el código no funcionara, pero fue resuelto al activar el código con la generación de cookies.

# Listas.js
Se ha integrado un div más en el cual se pondrá la lista de la compra actual, que no estará guardada por defecto.
Este componente recoge los datos de la cookie y los muestra en la lista de la compra.

## Obstaculos
Se tuvo que corregir un error que se producía al entrar en en la lista y la cookie no existía. Introdución un condicional este error se solucionó
```js
if(cookie.get("ingredientes"))
```

# TarjetaListaAcutal.js
Este componente se encarga de gestionar la lista de la compra actual o "default" es la lista en la que se van guardando ingredienes de las recetas selecionadas.
- Tiene habilitado un checkbox y un boton de eliminar de la lista de la compra.

 ## Obstaculos
 Aún ninguno de relevancia.