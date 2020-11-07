var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};
//console.log(teclas);
document.addEventListener("keyup", dibujarTeclado); // escuhador de eventos con el evento keyup para las teclas presionadas y al soltarlas genera un evento
var cuadrito = document.getElementById("eventoPorTecla");
var papel = cuadrito.getContext("2d");
var x = 150;
var y = 150;

dibujarLineas("red", 149, 149, 151, 151, papel);

function dibujarLineas(color, xinicial, yinicial, xfinal, yfinal, lienzo, papel) { // funciones de javascript
    lienzo.beginPath(); //arrancar dibujo invocado no tienen parametros
    lienzo.strokeStyle = color; //color del lapiz - atributo o porpiedad del objeto llamado
    lienzo.lineWidth = 3; // grosor de la linea en pixeles
    lienzo.moveTo(xinicial, yinicial); //funcion de mover de un punto x y
    lienzo.lineTo(xfinal, yfinal); // funcion de trazar linea en punto x y
    lienzo.stroke(); // funcion de trazar linea
    lienzo.closePath(); // funcion de cerrar dibujo
}

function dibujarTeclado(evento) {
    var colorcito = 'orange'; // color
    var movimiento = 10; //cantidad de espacio
    switch (evento.keyCode) {
        case teclas.UP:
            dibujarLineas(colorcito, x, y, x, y - movimiento, papel)
            y = y - movimiento;
            //console.log('arriba');
            break;
        case teclas.DOWN:
            dibujarLineas(colorcito, x, y, x, y + movimiento, papel)
            y = y + movimiento;
            //console.log('abajo');
            break;
        case teclas.LEFT:
            dibujarLineas(colorcito, x, y, x - movimiento, y, papel)
            x = x - movimiento;
            //console.log('izquierda');
            break;
        case teclas.RIGHT:
            dibujarLineas(colorcito, x, y, x + movimiento, y, papel)
            x = x + movimiento;
            //console.log('derecha');
            break;
        default:
            console.log('otra tecla!!!!');
    }
}