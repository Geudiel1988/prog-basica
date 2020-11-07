
class Billete
{
  constructor(v, c)
  {
    this.valor = v;
    this.cantidad = c;
  }
}

function entregarDinero()
{
  var t = document.getElementById("dinero");
  dinero = parseInt(t.value);
  for(var bi of caja)
  {

    if(dinero > 0)
    {
      div = Math.floor(dinero / bi.valor);

      if(div > bi.cantidad)
      {
        papeles = bi.cantidad;
      }
      else
      {
        papeles = div;
      }

      entregado.push( new Billete(bi.valor, papeles) );
      dinero = dinero - (bi.valor * papeles);
    }

  }

  if(dinero > 0)
  {
    resultado.innerHTML = "Soy un cajero malo, he sido malo y no puedo darte esa cantidad :(";
  }
  else
  {
    for(var e of entregado)
    {
      if(e.cantidad > 0)
      {
              resultado.innerHTML += e.cantidad + " billetes de $" + e.valor + "<br />";
      }
    }
  }
}

var caja = [];
var entregado = [];
caja.push( new Billete(100, 5) );
caja.push( new Billete(50, 10) );
caja.push( new Billete(20, 5) );
caja.push( new Billete(10, 10) );
caja.push( new Billete(5, 5) );
var dinero = 0;
var div = 0;
var papeles = 0;

var resultado = document.getElementById("resultado");
var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);


var imagenes = [];
imagenes["100"] = "billete100.png";
imagenes["50"] = "billete50.png";
imagenes["20"] = "billete20.png";
imagenes["10"] = "billete10.png";

//dinero de denominacion mas pequeña

magenes["5"] = "billete5.png";
imagenes["2"] = "billete2.png";
imagenes["1"] = "billete1.png";

class Billete
{
  constructor(v, c)
  {
    this.valor = v;
    this.cantidad = c;
    this.imagen = new Image();
    this.imagen.src = imagenes[this.valor];
  }
}

var caja = [];
caja.push( new Billete(100, 10) );
caja.push( new Billete(50, 10) );
caja.push( new Billete(20, 10) );
caja.push( new Billete(10, 10) );

//dinero de denominacion mas pequeña

caja.push( new Billete(5, 10) );
caja.push( new Billete(2, 10) );
caja.push( new Billete(1, 10) );

contar();

var div = 0;
var papeles = 0;

var resultado = document.getElementById("resultado");
var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);

function entregarDinero()
{
  var dibujado = [];
  var t = document.getElementById("dinero");
  dinero = parseInt(t.value);
  if (total >= dinero)
  {
    for(bi of caja)
    {
      if (dinero > 0)
      {
        div = Math.floor(dinero/bi.valor);
        if (div>bi.cantidad)
        {
          papeles = bi.cantidad;
        }
        else
        {
          papeles = div;
        }
          bi.cantidad = bi.cantidad-papeles;
        for (var i = 0; i < papeles; i++)
        {
          dibujado.push ( new Billete(bi.valor, 1) );
        }
        dinero -= (bi.valor * papeles);
      }
    }
    if (dinero == 0)
    {
      resultado.innerHTML += "Se ha retirado: <br />";
      for(var e of dibujado)
      {
        resultado.innerHTML += "<img src=" + e.imagen.src + " />";
      }
      resultado.innerHTML += "<hr />";
    contar();
    }
    else
    {
      resultado.innerHTML += "No tengo los billetes para esa suma, intenta otro valor <hr />";
    }

  }
  else
  {
    resultado.innerHTML += "Soy un cajero malo, he sido malo y no puedo darte esa cantidad :( <hr />";
  }
}

function contar()
{
  total = 0
  for (var tot of caja)
  {
    total = total + tot.valor * tot.cantidad;
  }
  console.log(total);
}
