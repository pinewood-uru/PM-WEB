import { Request } from "../Requests.js";
import { imprimir, obtenerValorInput } from "../utils/utils.js";

const btnsendproyecto = document.getElementById("form-proyecto-submit");

btnsendproyecto.addEventListener("click", ()=>{

const razonsocialInput = document.getElementById('razonsocial');
const rutInput = document.getElementById('rut');
const direccionInput = document.getElementById('direccion');
const padronInput = document.getElementById('padron');
const seccionalInput = document.getElementById('seccional');
const barrioInput = document.getElementById('barrio');
const guardarInfoCheckbox = document.getElementById('guardar-info');
const formSubmitButton = document.getElementById('form-proyecto-submit');

Request.postproyecto
})