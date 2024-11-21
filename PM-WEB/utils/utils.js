import { Request } from "../Requests.js";

export const obtenerValorInput = (idInput) =>
  document.getElementById(idInput).value;

export const modificarValorInput = (idInput, value) => {
  // Verificar la sintaxis.
  document.getElementById(idInput).value = value;
}

export const imprimir = (elemento, contenido) => {
    document.querySelector(`#${elemento}`).innerHTML = contenido;
  };


// VALIDAR SESSION 

export const validarSesion = () => {

  const adminlog = sessionStorage.getItem("session");
  console.log(adminlog);

  // verificamos si estamos en la pagina de login o register
  const estaEnLogin = document.location.pathname.includes("login.html");
  const estaEnRegister = document.location.pathname.includes("registro.html");
  const estaEnPaginaPublica = estaEnLogin || estaEnRegister;

  // si el usuario esta logueado y esta en una pagina publica, lo redirigimos al index
  if (adminlog) {
    if (estaEnPaginaPublica) {
      document.location.replace("index.html");
    }
  } else {
    // si no estas logueado,y esta en una pagina restringida, redirigimos al login
    if (!estaEnPaginaPublica) {
      document.location.replace("login.html");
    }
  }
};

// LOGOUT

export const eventoClickCerrarSesion = () => {
    document.querySelector("#boton-logout").addEventListener("click", () => {
      sessionStorage.removeItem("session");
      Request.logout().then(() => {
        document.location.replace("index.html");
      });
    });
  };

