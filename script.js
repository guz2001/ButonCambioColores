let boton = document.getElementById('boton');
let fondo = document.getElementById('todo');

// Lista de colores disponibles
let colores = ['red', 'blue', 'green', 'orange', 'purple', 'yellow'];

boton.addEventListener('click', function () {
    // Obtener el color actual del fondo
    let colorActual = getComputedStyle(fondo).backgroundColor;

    let nuevoColor;

    do {
        // Elegir color aleatorio
        let indice = Math.floor(Math.random() * colores.length);
        nuevoColor = colores[indice];
    } while (colorActual === convertirNombreARGB(nuevoColor));

    // Cambiar el color del fondo
    fondo.style.backgroundColor = nuevoColor;
});

// Convertimos colores por nombre (como 'red') a RGB para poder comparar
function convertirNombreARGB(nombre) {
    let div = document.createElement('div');
    div.style.color = nombre;
    document.body.appendChild(div);

    let colorRGB = getComputedStyle(div).color;

    document.body.removeChild(div);
    return colorRGB;
}

let click=document.getElementById('conteo-click')
let divColor=document.getElementById('cambioscolores')
let coloresDiv = ['red', 'blue', 'green', 'orange', 'purple', 'yellow'];

click.addEventListener('click',function(){
    let colorAhora= getComputedStyle(divColor).backgroundColor;
    let otroColor;


})
do{
    let index=Math.floor(Math.random()*)
}