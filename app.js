//Menu lateral
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){//si esta oculto
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}
//oculto el menu una vez que selecciono una opción
let links = document.querySelectorAll("nav a");
for(var x = 0; x <links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}

//Creo las barritas de una barra particular identificada por su id
function crearBarra(id_barra){
    for(i=0;i<=16;i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}

//selecciono todas las barras generales par aluego manipularlas
let sa = document.getElementById("sa");
crearBarra(sa);
let linux = document.getElementById("linux");
crearBarra(linux);
let wordpress = document.getElementById("wordpress");
crearBarra(wordpress);
let mysql = document.getElementById("mysql");
crearBarra(mysql);
let php = document.getElementById("php");
crearBarra(php);
let sensores = document.getElementById("sensores");
crearBarra(sensores);

//Ahora voy a guardar la cantidad de barritas que se van a ir pintando por cada bara
//para eso utilizo un arreglo, cada posiciòn pertenece a un elemento
//comienzan en -1 porque no tiene ninguna pintada al iniciarse
let contadores = [-1,-1,-1,-1,-1,-1];
//esta variable la voy a utilizar de bandera para saber si ya ejecuto la animación
let entro = false;

//función principal para los efectos de las habilidades
function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills>=300 && entro==false){
        entro = true;
        const intervalSa = setInterval(function(){
            pintarBarra(sa, 16, 0, intervalSa);
        },100);
        const intervalLinux = setInterval(function(){
            pintarBarra(linux, 11, 1, intervalLinux);
        },100);
        const intervalWordpress = setInterval(function(){
            pintarBarra(wordpress, 11, 2, intervalWordpress);
        },100);
        const intervalMysql = setInterval(function(){
            pintarBarra(mysql, 15, 3, intervalMysql);
        },100);
        const intervalPhp = setInterval(function(){
            pintarBarra(php, 16, 4, intervalPhp);
        },100);
        const intervalSensores = setInterval(function(){
            pintarBarra(sensores, 11, 5, intervalSensores);
        },100);
    }
}

//se obtiene el id de la barra que se debe llenar
function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#2fb1ee";
    }else{
        clearInterval(interval)
    }
}

//cuando se produce el scroll del mouse, se realiza el efecto
window.onscroll = function(){
    efectoHabilidades();
}