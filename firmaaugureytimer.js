(function () {
  function iniciar(el) {
    var timer = parseInt(el.getAttribute("data-timer"), 10);
    var duracion = parseInt(el.getAttribute("data-duracion"), 10);
    if (isNaN(timer)) timer = -1;          // sin atributo = sin timer
    if (isNaN(duracion) || duracion < 1000) duracion = 6000;

    if (timer === -1) return;              // -1: no se crea ningún timer, solo hover

    function ciclo() {
      setTimeout(function () {             // espera "timer" ms en reposo...
        el.classList.add("activo");        // ...y lanza la animación
        setTimeout(function () {
          el.classList.remove("activo");   // vuelve al reposo
          ciclo();                         // y empieza a contar otra vez
        }, duracion);
      }, timer);
    }
    ciclo();
  }

  function arrancar() {
    var lista = document.querySelectorAll(".firma-augurey");
    for (var i = 0; i < lista.length; i++) iniciar(lista[i]);
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", arrancar);
  } else {
    arrancar();
  }
})();
