import { Request } from "../Requests.js";
import { imprimir, obtenerValorInput } from "../utils/utils.js";


const btnLogin = document.getElementById("form-login-submit");

btnLogin.addEventListener("click", () => {
    const email = obtenerValorInput("email");
    const password = obtenerValorInput("password");
    
    Request.login(email, password)
    .then((data) => {
       console.log(data);
        sessionStorage.setItem("session", data.session);
        sessionStorage.setItem("user", JSON.stringify(data.email));

        document.location.replace("perfil.html");
    })
    .catch((error) => {
        console.log(error);
        imprimir("form-login-error", error)
    })

})