import { Request } from "../Requests.js";
import { imprimir, obtenerValorInput } from "../utils/utils.js";

const btnsendproyecto = document.getElementById("form-proyecto-submit");

btnsendproyecto.addEventListener("click", ()=>{

const razonsocialInput = document.getElementById("razonsocial");
const rutInput = document.getElementById("rut");
const direccionInput = document.getElementById("direccion");
const padronInput = document.getElementById("padron");
const seccionalInput = document.getElementById("seccional");
const barrioInput = document.getElementById("barrio");

if(!razonsocialInput || !rutInput || !direccionInput || !padronInput || !seccionalInput || !barrioInput || !guardarInfoCheckbox ||){
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