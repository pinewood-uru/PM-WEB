export default class Proyecto {
    id;
    razonsocial;
    rut;
    direccion;
    padron;
    estado;
    edt;

    constructor(id, razonsocial, rut, direccion, padron, estado, edt) {
        this.id = id;
        this.razonsocial = razonsocial;
        this.rut = rut;
        this.direccion = direccion;
        this.padron = padron;
        this.estado = estado;
        this.edt = edt;
    }
mostrarProyectos() {
    return ` <tr>
    <th scope="row" class="">Dirección</th>
    <td>${this.direccion}</td>
</tr>
<tr>
    <th scope="row">${this.padron}</th>
    <td>56789</td>
</tr>
<tr>
    <th scope="row">Estado</th>
    <td class="fw-bold text-success">${this.estado}</td>
</tr>
<tr>
    <th scope="row">Finalización</th>
    <td class="fw-bold">${this.edt}</td>
</tr>`
}}

