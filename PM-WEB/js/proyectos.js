import  Proyecto  from "../js/Modelo/Proyectos.js"
import { Request } from "../Requests.js";
import { imprimir } from "../utils/utils.js"

const mostrarproyectos = (data) => {
    console.log('Proyectos: ', data)
imprimir("lista-error", "");
const headerlista = `<tr>
<th scope="col" class="bg-danger text-white w-100" colspan="4">Proyecto</th>
</tr>`;

const listado = data.map((proyecto) =>
    new Proyecto(
        proyecto.id,
        proyecto.direccion,
        proyecto.padron,
        proyecto.estado,
        proyecto.edt
    ).mostrarProyectos());

    imprimir("proyectos", `<table class="table table-bordered border-danger"><thead>${headerlista}</thead><tbody>${listado}<tbody></table>`)

}

// ERROR

const mostrarError = (error) => {
    imprimir("lista-error", error);
};

// TABLA

Request.getProyectos().then(mostrarproyectos).catch(mostrarError);

