var z;

for (var i = 0; i < 10; i++) {
	z = aleatorio (10, 20);
	document.write(z + ' ,');
}

function aleatorio(min, maxi){
	var resultado;
	resultado = Math.floor(Math.random() * ( maxi - min + 1 ) + min );
	return resultado;
}
/*
Math.floor() devuelve el número entero por debajo de los decimales.
Math.ceil() devuelve el siguiente número entero arriba de los decimales
Math.random() devuelve un número aleatorio de 0 a 0.999..
 */