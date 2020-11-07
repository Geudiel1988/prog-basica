  var texto = document.getElementById("texto_lineas"); // forma de traer un elemento de html por medio de un id
  var boton = document.getElementById("botoncito");

  boton.addEventListener("click", dibujoPorClick); // escuchador de eventos,recibe dos eventos
  var d = document.getElementById("dibujito");
  var ancho = d.width;
  var lienzo = d.getContext("2d"); //forma de mostrar en 3d o 2d funcion de evento canvas y permite
  //y permite obtener el area donde se va a trabajar 2d o 3d


  function dibujarLineas(color, xinicial, yinicial, xfinal, yfinal) { // funciones de javascript
      lienzo.beginPath(); //arrancar dibujo invocado no tienen parametros
      lienzo.strokeStyle = color; //color del lapiz - atributo o porpiedad del objeto llamado
      lienzo.moveTo(xinicial, yinicial); //funcion de mover de un punto x y
      lienzo.lineTo(xfinal, yfinal); // funcion de trazar linea en punto x y
      lienzo.stroke(); // funcion de trazar linea
      lienzo.closePath(); // funcion de cerrar dibujo
  }

  function dibujoPorClick() {

      var lineas = parseInt(texto.value); // value obtine el texto en el input de html
      var l = 0;
      var yi, xf;
      var colorcito = '#AAFA';
      var espacio = ancho / lineas;

      //declaracion de ciclos while o for
      //while (l < lineas) {
      for (l = 0; l < lineas; l++) { // ciclo donde se va a mostrar el recorrido del ciclo
          yi = espacio * l;
          xf = espacio * (l + 1);
          dibujarLineas(colorcito, 0, yi, xf, 300);
          //console.log('linea ' + l); // herramienta de navegador para buscar errores y otras
          l = l++; // forma de sumar numeros en 1
      }
      // invocacion de funciones
      dibujarLineas(colorcito, 1, 1, 1, 300);
      dibujarLineas(colorcito, 1, 299, 299, 299);
  }