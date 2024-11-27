import { Request } from "../Requests.js";
import { imprimir, obtenerValorInput, validarSesion } from "../utils/utils.js";

validarSesion();

const params = new URLSearchParams(window.location.search);
const idproyecto = params.get("id");

console.log(idproyecto);
if (idproyecto != undefined) {
    Request.getproyectoById(idproyecto)
    .then((data) => {
        const { razonsocial, rut, direccion, padron, seccional, barrio, date } = data;
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

const btnsendproyecto = document.getElementById("form-proyecto-submit");

btnsendproyecto.addEventListener("click", ()=>{

const razonsocialInput = obtenerValorInput("razonsocial");
const rutInput = obtenerValorInput("rut");
const direccionInput = obtenerValorInput("direccion");
const padronInput = obtenerValorInput("padron");
const seccionalInput = obtenerValorInput("seccional");
const barrioInput = obtenerValorInput("barrio");

if(!razonsocialInput || !rutInput || !direccionInput || !padronInput || !seccionalInput || !barrioInput){
    imprimir("form-proyecto-error", "Completar todos los campos");
    return;
}

const body = JSON.stringify({
    razonsocioal,
    rut,
    direccion,
    padron,
    seccional,
    barrio,

});

Request.register(body)
    .then(()=> {
        document.location.replace("perfil.html");
    }).then(() => {
        alert("Se ha ingresado con exito");
    })
    .catch((error) => {
        imprimir("form-proyecto-error", error);
    });
});