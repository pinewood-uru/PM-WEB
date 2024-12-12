import { Request } from "../Requests.js";
import { imprimir, obtenerValorInput, validarSesion } from "../utils/utils.js";

validarSesion();

const params = new URLSearchParams(window.location.search);
const idproyecto = params.get("id");

console.log(idproyecto);
if (idproyecto != undefined) {
    Request.getproyectobyid(idproyecto)
    .then((data) => {
        const { razonsocial, id, rut, direccion, padron, estado, edt, token} = data;
        console.log(data)
        document.querySelector("#razonsocial").value = razonsocial;
        document.querySelector("#rut").value = rut;
        document.querySelector("#direccion").value = direccion;
        document.querySelector("#padron").value = padron;
        document.querySelector("#estado").value = estado;
        document.querySelector("#edt").value = edt;
        document.querySelector("#token").value = token;

        
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
const estado= obtenerValorInput("estado");
const edt= obtenerValorInput("edt");
const token= obtenerValorInput("token");


if(!razonsocial|| !rut|| !direccion|| !padron){
    imprimir("form-proyecto-error", "Completar todos los campos");
    return;
}

const body = JSON.stringify({
    razonsocial,
    rut,
    direccion,
    padron,
    estado,
    edt,
    token,

});

// MODIFICAR PROYECTO

idproyecto ? Request.modificarproyecto(idproyecto, body).then(()=> {
    document.location.replace("perfil.html");
}).then(() => {
    alert("Se ha ingresado con exito");
})
.catch((error) => {
    imprimir("nuevo-proyecto-error", error);
}) :
Request.postproyecto(body)
    .then(()=> {
        document.location.replace("buscarproyecto.html");
    }).then(() => {
        alert("Se ha ingresado con exito");
    })
    .catch((error) => {
        imprimir("form-proyecto-error", error);
    });
});