import  Proyecto  from "../js/Modelo/Proyectos.js";
import { Request } from "../Requests.js";
import { imprimir, obtenerValorInput } from "../utils/utils.js";


const params = new URLSearchParams(window.location.search);
const tokenproyecto = params.get("id");



const mostrarProyectosbytoken = (data) => {
    console.log('proyecto', data)
// imprimir("lista-error", "");

const listado = data.map((proyecto) =>
    new Proyecto(
        proyecto.id,
        proyecto.razonsocial,
        proyecto.rut,
        proyecto.direccion,
        proyecto.padron,
        proyecto.estado,
        proyecto.edt,
        proyecto.token
    ).imprimirProyectos()).join("");
    
    imprimir("tablaproyecto", `<table class="table table-bordered border-danger" id="tablaproyecto">${listado}</table>
    
  </table>`)

}

// ERROR

const mostrarErrorID = (error) => {
    imprimir("lista-error", error);
};

// BUSCAR PROYECTO

document.getElementById("form-filtro-submit").addEventListener("click", () => {
    const filtrotoken = obtenerValorInput("input-filtro-token");

    Request.getProyectobyID({filtrotoken})
    .then(mostrarProyectosbytoken)
    .catch(mostrarErrorID);
});