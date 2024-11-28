import  Proyecto  from "../js/Modelo/Proyectos.js"
import { Request } from "../Requests.js";
import { imprimir } from "../utils/utils.js"

const mostrarProyectos = (data) => {
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
        proyecto.edt
    ).imprimirProyectos());
    
    imprimir("accordionFlushExample", `<div class="accordion accordion-flush" id="accordionFlushExample">${listado}</div>`)

}

// ERROR

const mostrarError = (error) => {
    imprimir("lista-error", error);
};

document.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn-eliminar')) {
        const id = event.target.getAttribute('data-id');
        Request.deleteCliente(id).then(() => {
            alert("Eliminado con exito");
            document.location.replace("Reservas.html");
            // mostrarlistaClientes()
        }).catch(mostrarError);
    }
});

// TABLA

Request.getProyectos().then(mostrarProyectos).catch(mostrarError);

