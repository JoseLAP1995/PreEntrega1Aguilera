function escogerPelicula() {
  let peliculaEscogida;
  do {
    peliculaEscogida =
      prompt(`Bienvenido a Cines Unidos. Las entradas tienen un valor de $1300. Por favor coloque según el número la película que desee ver:
    1. Harry Potter y la Piedra Filosofal
    2. Harry Potter y la Cámara Secreta
    3. Harry Potter y el Prisionero de Azkaban
    4. Harry Potter y el Cáliz de Fuego
    5. Harry Potter y la Orden del Fénix
    6. Harry Potter y el Príncipe Mestizo
    7. Harry Potter y las Reliquias de la Muerte: Parte 1
    8. Harry Potter y las Reliquias de la Muerte: Parte 2`);

    if (
      isNaN(peliculaEscogida) ||
      peliculaEscogida === "" ||
      parseInt(peliculaEscogida) < 1 ||
      parseInt(peliculaEscogida) > 8
    ) {
      alert("Debes introducir un valor numérico entre 1 y 8.");
    }
  } while (
    isNaN(peliculaEscogida) ||
    peliculaEscogida === "" ||
    parseInt(peliculaEscogida) < 1 ||
    parseInt(peliculaEscogida) > 8
  );

  peliculaEscogida = parseInt(peliculaEscogida);

  switch (peliculaEscogida) {
    case 1:
      return "Harry Potter y la Piedra Filosofal";
    case 2:
      return "Harry Potter y la Cámara Secreta";
    case 3:
      return "Harry Potter y el Prisionero de Azkaban";
    case 4:
      return "Harry Potter y el Cáliz de Fuego";
    case 5:
      return "Harry Potter y la Orden del Fénix";
    case 6:
      return "Harry Potter y el Príncipe Mestizo";
    case 7:
      return "Harry Potter y las Reliquias de la Muerte: Parte 1";
    default:
      return "Harry Potter y las Reliquias de la Muerte: Parte 2";
  }
}

function desearBebida() {
  let quererBebida;

  do {
    quererBebida = prompt(
      `¿Desea añadir una bebida a su pedido? Tiene un valor de $650 (Si/No)`
    );

    if (
      quererBebida.toLocaleLowerCase() !== "si" &&
      quererBebida.toLocaleLowerCase() !== "no"
    ) {
      alert(`Por favor ingrese "Si" o "No"`);
    }
  } while (
    quererBebida.toLocaleLowerCase() !== "si" &&
    quererBebida.toLocaleLowerCase() !== "no"
  );

  if (quererBebida.toLocaleLowerCase() === "si") {
    return 650;
  } else {
    return 0;
  }
}

function desearGolosina() {
  let quererGolosina;

  do {
    quererGolosina = prompt(
      `¿Desea añadir una golosina a su pedido? Tiene un valor de $800 (Si/No)`
    );

    if (
      quererGolosina.toLocaleLowerCase() !== "si" &&
      quererGolosina.toLocaleLowerCase() !== "no"
    ) {
      alert(`Por favor ingrese "Si" o "No"`);
    }
  } while (
    quererGolosina.toLocaleLowerCase() !== "si" &&
    quererGolosina.toLocaleLowerCase() !== "no"
  );

  if (quererGolosina.toLocaleLowerCase() === "si") {
    return 800;
  } else {
    return 0;
  }
}

function ingresarCodigoDescuento(codigoDescuento) {
  let codigoUsuario;
  do {
    codigoUsuario = prompt(
      `¿Tienes el código de descuento? Sí es así por favor ingresa y tendrá un 15% de descuento en su compra total (El código solo es de formato numérico)`
    );

    if (isNaN(codigoUsuario) || codigoUsuario === "") {
      alert("Debes introducir un valor numérico para el código");
    }
  } while (isNaN(codigoUsuario) || codigoUsuario === "");

  if (codigoDescuento === parseInt(codigoUsuario)) {
    alert("¡Felicidades! Tendrá un 15% de descuento al final de su compra");
    return true;
  } else {
    alert("Código incorrecto.");
    return false;
  }
}

function darTotal(pelicula, bebida, golosina, tieneCodigo) {
  let valorPelicula = 0;
  let descuento = 1;
  if (tieneCodigo) {
    descuento = 0.85;
  }
  if (pelicula !== "") {
    valorPelicula = 1300;
  }

  alert(`Película que va a ver: ${pelicula}
  Valor de la bebida: ${bebida}
  Valor de la golosina: ${golosina}
  ¿Tiene código de descuento? ${tieneCodigo}
  Valor total: ${(valorPelicula + bebida + golosina) * descuento}
  ¡Muchas gracias por comprar en Cines Unidos`);
}

function menu() {
  //Variables y constantes
  let peliculaAVer = "";
  let golosina = 0;
  let bebida = 0;
  //Código que si la persona tiene se le dará un 15% de descuento al valor total;
  let codigoDescuento = 220995;
  let tieneCodigo = false;

  let opcion;

  do {
    opcion = prompt(`Bienvenido a Cines Unidos. ¿Qué desea hacer?
      1. Escoger película
      2. Añadir Bebida
      3. Añadir golosina
      4. Ingresar código de descuento
      5. Salir (Ver valor total de todo)`);

    if (
      isNaN(opcion) ||
      opcion === "" ||
      parseInt(opcion) < 1 ||
      parseInt(opcion) > 5
    ) {
      alert("Debes introducir un valor numérico entre 1 y 5.");
    } else {
      if (parseInt(opcion) === 1) {
        peliculaAVer = escogerPelicula();
      } else if (parseInt(opcion) === 2) {
        bebida = desearBebida();
      } else if (parseInt(opcion) === 3) {
        golosina = desearGolosina();
      } else if (parseInt(opcion) === 4) {
        tieneCodigo = ingresarCodigoDescuento(codigoDescuento);
      } else if (parseInt(opcion) === 5) {
        darTotal(peliculaAVer, bebida, golosina, tieneCodigo);
      }
    }
  } while (
    isNaN(opcion) ||
    opcion === "" ||
    parseInt(opcion) < 5 ||
    parseInt(opcion) > 5
  );
}

menu();