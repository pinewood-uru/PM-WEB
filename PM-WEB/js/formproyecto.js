import { Request } from "../Requests.js";
import { imprimir, obtenerValorInput, validarSesion } from "../utils/utils.js";

validarSesion();

const params = new URLSearchParams(window.location.search);
const idproyecto = params.get("id");

console.log(idproyecto);
if (idproyecto != undefined) {
    Request.getproyectoById(idproyecto)
    .then((data) => {
        const { razonsocial, rut, direccion, padron, seccional, barrio} = data;
        console.log(data)
        document.querySelector("#razonsocial").value = razonsocial;
        document.querySelector("#rut").value = rut;
        document.querySelector("#direccion").value = direccion;
        document.querySelector("#padron").value = padron;
        document.querySelector("#seccional").value = seccional;
        document.querySelector("#barrio").value = barrio;
    })
    .catch((error) => {
        imprimir("nuevo-proyecto-error", error);
    });
}

document.getElementById("form-proyecto-submit").addEventListener("click", ()=>{

const razonsocial= obtenerValorInput("razonsocial");
const rut= obtenerValorInput("rut");
const direccion= obtenerValorInput("direccion");
const padron= obtenerValorInput("padron");
const seccional= obtenerValorInput("seccional");
const barrio= obtenerValorInput("barrio");

if(!razonsocial|| !rut|| !direccion|| !padron|| !seccional|| !barrio){
    imprimir("form-proyecto-error", "Completar todos los campos");
    return;
}

const body = JSON.stringify({
    razonsocial,
    rut,
    direccion,
    padron,
    seccional,
    barrio,

});

Request.postproyecto(body)
    .then(()=> {
        document.location.replace("perfil.html");
    }).then(() => {
        alert("Se ha ingresado con exito");
    })
    .catch((error) => {
        imprimir("form-proyecto-error", error);
    });
});