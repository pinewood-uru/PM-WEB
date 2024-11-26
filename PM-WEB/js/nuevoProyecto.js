import { Request } from "../Requests.js";
import { imprimir, obtenerValorInput, validarSesion } from "../utils/utils.js";

validarSesion();

const params = new URLSearchParams(window.location.search);
const idCliente = params.get("id");

console.log(idCliente);

