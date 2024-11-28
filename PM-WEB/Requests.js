
const obtenerUrl = (ruta) => `${Request.urlBase}/${ruta}`;

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

  const token = sessionStorage.getItem("session") 
  if(token)headers.authorization=token

const procesarRespuesta = (res) => {
    return res.json().then((data) => {
      if (data.error) {
        throw new Error(data?.error);
      }
      console.log('Respuesta: ', data)
  
      return data;
    });
  };

  const manejarErrores = (error = new Error("Error desconocido")) => {
    console.error("Ha ocurrido un error:", error.message);
    if (error.message === "Sesión no es valida") {
      sessionStorage.removeItem("session");
      sessionStorage.removeItem("user");
      document.location.replace("login.html");
    }
    throw error.message;
  };
  

export class Request {
    static urlBase = "http://localhost:3000"

    // POST LOGIN
    static login(email, password) {
        const body = JSON.stringify({ email, password });
    
        return fetch(obtenerUrl("loginadm"), {
          method: "POST",
          headers,
          body,
        })
          .then(procesarRespuesta)
          .catch(manejarErrores);
      }

      // LOGOUT

  static logout() {
    return fetch(obtenerUrl("logoutadm"), { method: "POST", headers })
      .then(procesarRespuesta)
      .catch(manejarErrores);
  }

//   GET PROYECTOS

  static getProyectos(opciones = {}) {

    const queryParams = new URLSearchParams({});

    return fetch(obtenerUrl("proyecto" + queryParams), { headers })
      .then(procesarRespuesta)
      .catch(manejarErrores)
}

static getproyectoById(id) {
  return fetch(obtenerUrl(`proyecto/${id}`), { headers })
    .then(procesarRespuesta)
    .catch(manejarErrores)
}

// POST PROYECTO

static postproyecto(body) {
  return fetch(obtenerUrl("proyecto"), { method: "POST", headers, body })
    .then(procesarRespuesta)
    .catch(manejarErrores);
}

// DELETE PROYECTO

static deleteProyecto(id) {
  return fetch(obtenerUrl(`proyecto/${id}`), { method: "DELETE", headers })
}

// MODIFICAR PROYECTO


static modificarproyecto(id, body) {
  return fetch(obtenerUrl(`proyecto/${id}`), { method: "PUT", headers, body })
  .then(procesarRespuesta)
  .catch(manejarErrores);
}

}









