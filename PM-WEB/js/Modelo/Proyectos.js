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
imprimirProyectos() {
    return `  <div class="accordion-item">
    <h3 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#flush-collapse${this.id}" aria-expanded="false" aria-controls="flush-collapse${this.id}">
            Proyecto ${this.id}
        </button>
    </h3>
    <div id="flush-collapse${this.id}" class="accordion-collapse collapse"
        data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">
            <!-- TABLA -->
            <table class="table table-bordered border-danger">
                <thead>
                    <tr>
                        <th scope="col" class="bg-danger text-white w-100" colspan="4">Proyecto ${this.id}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row" class="">Dirección</th>
                        <td>${this.direccion}</td>
                    </tr>
                    <tr>
                        <th scope="row">Padrón</th>
                        <td>${this.padron}</td>
                    </tr>
                    <tr>
                        <th scope="row">Estado</th>
                        <td class="fw-bold text-success">${this.estado}</td>
                    </tr>
                    <tr>
                        <th scope="row">Finalización</th>
                        <td class="fw-bold">${this.edt}</td>
                    </tr>
                    <tr>
                        <th><button type="button" class="btn btn-dark btn-editar" id="btn-editar" data-id="${this.id}">
                                Editar Proyecto
                            </button></th>
                        <td>
                            <button type="button" class="btn btn-danger btn-eliminar" id="btn-borrar" data-id="${this.id}">
                                Borrar Proyecto
                            </button>
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
    </div>
</div>`
}}

