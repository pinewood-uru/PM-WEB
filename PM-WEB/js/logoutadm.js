import { Request } from "../Requests.js";
import { imprimir, validarSesion } from "../utils/utils.js";

// validamos la sesion del usuario
validarSesion();

const btnLogin = document.getElementById("logout");

btnLogin.addEventListener("click", () => {
    Request.logout()
    .then((data) => {
        console.log(data);
        sessionStorage.removeItem("session");
        sessionStorage.removeItem("user");
        document.location.replace("index.html");
    })
    .catch((error) => {
        console.log(error);
        imprimir("logout", error)
    })

})