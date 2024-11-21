import { Request } from "../Requests.js";
import { imprimir, obtenerValorInput } from "../utils/utils.js";

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