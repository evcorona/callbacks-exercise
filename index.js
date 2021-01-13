// Practica:
// Objetivo: Plasmar en funciones y callbacks el oroces de aplicación de kodemia
// 1.- Entrevista
// 2.- Oferta
// 3.- Inscripción
// 4.- Asistir a clase
//
// Materia prima: El Koder
// - entrevistado
// - Ofertado
// - inscrito
// - enClase

const kodemia = {
  entrevista: "",
  oferta: "",
  inscripcion: "",
  clase: "",
};

//Declaracion de funciones***************************************************
function entrevista(koder, callback) {
  //1 segundo
  setTimeout(() => {
    koder.entrevista = "entrevistado";
    let error = null;
    if (!koder.entrevista) {
      error = "No se pudo entrevistar";
    }
    callback(error, koder);
  }, 1000);
}

function oferta(koder, callback) {
  //1 segundo
  setTimeout(() => {
    koder.oferta = "ofertado";
    let error = null;
    if (!koder.oferta) {
      error = "No se pudo ofertar";
    }
    callback(error, koder);
  }, 2000);
}

function inscripcion(koder, callback) {
  //1 segundo
  setTimeout(() => {
    koder.inscripcion = "inscrito";
    let error = null;
    if (!koder.inscripcion) {
      error = "No se pudo inscribir";
    }
    callback(error, koder);
  }, 2000);
}

function asistirClase(koder, callback) {
  //1 segundo
  setTimeout(() => {
    koder.clase = "enClase";
    let error = null;
    if (!koder.clase) {
      error = "No pudo asistir a clase";
    }
    callback(error, koder);
  }, 2000);
}

//Ejecucion de Funciones**********************************************
entrevista(kodemia, (errorDeEntrevista, koderEntrevistado) => {
  console.log("Proceso de aplicacion a Kodemia");
  if (errorDeEntrevista) {
    console.error("Error:", errorDeEntrevista);
    return; //detiene la ejecucion de una funcion se le conoce como salida temprana
  }

  console.log("- Individuo entrevistado");
  oferta(koderEntrevistado, (errorDeOferta, koderOfertado) => {
    if (errorDeOferta) {
      console.error("   - Error:", errorDeOferta);
      return;
    }

    console.log("- Individuo ofertado");
    inscripcion(koderOfertado, (errorDeInscripcion, koderInscrito) => {
      if (errorDeInscripcion) {
        console.error("   - Error:", errorDeInscripcion);
        return;
      }

      console.log("- Koder inscrito");
      asistirClase(koderInscrito, (errorDeAsistencia, koderEnClase) => {
        if (errorDeAsistencia) {
          console.error("   - Error:", errorDeAsistencia);
          return;
        }

        console.log("- Koder en clase");
        console.log("--");
        console.log("Koder status", koderEnClase);
      });
    });
  });
});
