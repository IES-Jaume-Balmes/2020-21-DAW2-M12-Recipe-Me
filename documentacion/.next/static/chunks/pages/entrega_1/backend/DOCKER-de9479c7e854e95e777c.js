_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[12],{Y9rA:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/entrega_1/backend/DOCKER",function(){return t("rSvT")}])},rSvT:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return p}));var a=t("Ff2n"),r=t("rePB"),o=(t("q1tI"),t("7ljp")),c=t("CXQJ"),m=t.n(c),s=t("UY+1"),d=t("R9PV");function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){Object(r.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var u=function(e){return Object(s.withSSG)(m()({filename:"DOCKER.md",route:"/entrega_1/backend/DOCKER",meta:{},pageMap:[{name:"_app",route:"/_app"},{name:"entrega_0",children:[{name:"entrega_0",route:"/entrega_0/entrega_0"},{name:"instrucciones",children:[{name:"logginForm_symfony",route:"/entrega_0/instrucciones/logginForm_symfony"},{name:"meta.json",meta:{logginForm_symfony:"Loggin Form",registerForm_symfony:"Register Form",setup_symfony_basic:"Setup Symfony"}},{name:"registerForm_symfony",route:"/entrega_0/instrucciones/registerForm_symfony"},{name:"setup_symfony_basic",route:"/entrega_0/instrucciones/setup_symfony_basic"}],route:"/entrega_0/instrucciones"},{name:"meta.json",meta:{entrega_0:"Inicio",instrucciones:"Instrucciones de inicio",entrega_1:"Entrega 1"}}],route:"/entrega_0"},{name:"entrega_1",children:[{name:"backend",children:[{name:"API",route:"/entrega_1/backend/API"},{name:"DOCKER",route:"/entrega_1/backend/DOCKER"},{name:"DOCTRINE",route:"/entrega_1/backend/DOCTRINE"},{name:"FIXTURES",route:"/entrega_1/backend/FIXTURES"},{name:"LOGIN",route:"/entrega_1/backend/LOGIN",frontMatter:{name:"Login"}},{name:"OBSTACULOS",route:"/entrega_1/backend/OBSTACULOS"},{name:"RECURSOS",route:"/entrega_1/backend/RECURSOS"}],route:"/entrega_1/backend"},{name:"base_de_datos",children:[{name:"bbdd",route:"/entrega_1/base_de_datos/bbdd"}],route:"/entrega_1/base_de_datos"},{name:"frontend",children:[{name:"Aplicacion",route:"/entrega_1/frontend/Aplicacion",frontMatter:{name:"Aplicacion"}},{name:"Obstaculos",route:"/entrega_1/frontend/Obstaculos",frontMatter:{name:"Obstaculos"}},{name:"React_Inicio",route:"/entrega_1/frontend/React_Inicio",frontMatter:{name:"React_Inicio"}}],route:"/entrega_1/frontend"},{name:"meta.json",meta:{base_de_datos:"Base de datos"}}],route:"/entrega_1"},{name:"index",route:"/"},{name:"meta.json",meta:{index:"Proyecto Recipe Me!",entrega_0:"Entrega 0",entrega_1:"Entrega 1"}}]},d.a))(e)};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.mdx)(u,l(l({},t),{},{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("h1",null,"INSTRUCCIONES DOCKER"),Object(o.mdx)("p",null,"El objetivo es tener una base de datos en com\xfan, independiente de nuestra m\xe1quina. De este modo no necesitaremos modificar nunca el archivo de variables de entorno ",Object(o.mdx)("strong",l({},{parentName:"p"}),".env")," de nuestra aplicaci\xf3n."),Object(o.mdx)("ul",null,Object(o.mdx)("li",l({},{parentName:"ul"}),"Descargar ",Object(o.mdx)("strong",l({},{parentName:"li"}),"Docker desktop")," de la pagina oficial."),Object(o.mdx)("li",l({},{parentName:"ul"}),"Ir al directorio donde queremos instalar contenedores.")),Object(o.mdx)("h3",null,"Instalamos un contenedor con mysql:"),Object(o.mdx)("pre",null,Object(o.mdx)("code",l({},{className:"language-php",parentName:"pre"}),"> bin/console make:docker:database \n")),Object(o.mdx)("ul",null,Object(o.mdx)("li",l({},{parentName:"ul"}),"Ejecutamos ",Object(o.mdx)("strong",l({},{parentName:"li"}),"TODOS")," los contenedores disponibles. Tarda unos segundos en encenderlo todo.")),Object(o.mdx)("pre",null,Object(o.mdx)("code",l({},{className:"language-php",parentName:"pre"}),"> docker-compose up -d\n")),Object(o.mdx)("ul",null,Object(o.mdx)("li",l({},{parentName:"ul"}),"Para acceder a la base de datos:")),Object(o.mdx)("pre",null,Object(o.mdx)("code",l({},{className:"language-php",parentName:"pre"}),"> docker-compose exec database mysql -u root --password=password\n")),Object(o.mdx)("h3",null,"Otros comandos:"),Object(o.mdx)("ul",null,Object(o.mdx)("li",l({},{parentName:"ul"}),"Paramos los contenedores activos: ",Object(o.mdx)("inlineCode",l({},{parentName:"li"}),"docker-compose stop")),Object(o.mdx)("li",l({},{parentName:"ul"}),"Paramos contenedores y eliminamos su imagen por completo ","[elimina el mini server]",": ",Object(o.mdx)("inlineCode",l({},{parentName:"li"}),"docker-compose down")),Object(o.mdx)("li",l({},{parentName:"ul"}),"Chequea los contenedores que estan encendidos: ",Object(o.mdx)("inlineCode",l({},{parentName:"li"}),"docker-compose ps"))),Object(o.mdx)("h3",null,"Checkear las variables de entorno que esta ejecutando symfony"),Object(o.mdx)("pre",null,Object(o.mdx)("code",l({},{className:"language-php",parentName:"pre"}),"> symfony var:export --multiline\n")),Object(o.mdx)("h3",null,"Antes de empezar a trabajar siempre tendremos que hacer:"),Object(o.mdx)("pre",null,Object(o.mdx)("code",l({},{className:"language-php",parentName:"pre"}),"> docker-compose up -d\n")))}p.isMDXComponent=!0}},[["Y9rA",0,2,1,3]]]);