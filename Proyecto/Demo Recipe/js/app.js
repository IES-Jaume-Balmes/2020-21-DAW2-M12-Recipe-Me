var add = document.querySelectorAll(".add");
var lista = document.querySelector("#lista");
//console.log(recetas);
/* recetas[0].addEventListener("click", function () {
  console.log("hola");
}); */
for (let index = 0; index < add.length; index++) {
  add[index].addEventListener("click", function () {
    //console.log(this.children[1].textContent);
    var p = document.createElement("p");
    p.textContent = "Ceviche";
    p.addEventListener("click", function () {
      this.remove();
    });
    lista.prepend(p);
  });
}

var recetas = document.getElementById("recetas");
var muestra = document.getElementById("muestra");
muestra.style.display = "none";

var resultado = document.querySelector("#resultado");
resultado.style.display = "none";

document.getElementById("ejemplo").addEventListener("click", function () {
  muestra.style.display = "block";
  recetas.style.display = "none";
});

document.getElementById("back").addEventListener("click", function () {
  muestra.style.display = "none";
  recetas.style.display = "flex";
});

function crearLista() {
  muestra.style.display = "none";
  recetas.style.display = "none";
  document.getElementById("lista").style.display = "none";
  resultado.style.display = "block";
}

var logo = document.getElementById("logo");
logo.addEventListener("click", function () {
  document.getElementById("menu").style.left = "0";
});
