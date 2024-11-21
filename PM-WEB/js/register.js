import { validarSesion, obtenerValorInput, imprimir } from "../utils/utils.js";

import { Request } from "../Requests.js";

validarSesion()


document.querySelector("#btn-register").addEventListener("click", () => {

    const nombre = obtenerValorInput("form-register-nombre");
    const apellido = obtenerValorInput("form-register-apellido");
    const email = obtenerValorInput("form-register-email");
    const password = obtenerValorInput("form-register-password");

    if(!nombre || !apellido || !email || !password) {
        imprimir("form-register-error", "Completar todos los campos");
        return;
    }

    const body = JSON.stringify({
        nombre,
        sucursal,
        email,
        password
    });

    Request.register(body)
    .then(()=> {
        document.location.replace("index.html");
    }).then(() => {
        alert("Se ha registrado con exito");
    })
    .catch((error) => {
        imprimir("form-register-error", error);
    });
});