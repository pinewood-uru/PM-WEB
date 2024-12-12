import  Proyecto  from "../js/Modelo/Proyectos.js";
import { Request } from "../Requests.js";
import { imprimir, obtenerValorInput } from "../utils/utils.js";


const params = new URLSearchParams(window.location.search);
const tokenproyecto = params.get("id");



const mostrarProyectosbytoken = (proyecto) => {
const listado =
    new Proyecto(
        proyecto.id,
        proyecto.razonsocial,
        proyecto.rut,
        proyecto.direccion,
        proyecto.padron,
        proyecto.estado,
        proyecto.edt,
        proyecto.token
    ).imprimirProyectosbytoken();
    
    imprimir("tablaproyecto", `<table class="table table-bordered border-danger" id="tablaproyecto">${listado}</table>`)

}

// ERROR

const mostrarErrorToken = (error) => {
    imprimir("form-proyecto-error", error);
};

// BUSCAR PROYECTO

document.getElementById("form-filtro-submit").addEventListener("click", () => {
    const filtrotoken = obtenerValorInput("input-filtro-token");
    console.log(filtrotoken);

    Request.getProyectobytoken(filtrotoken)
    .then(mostrarProyectosbytoken)
    .catch(mostrarErrorToken);
});