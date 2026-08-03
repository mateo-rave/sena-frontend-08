const formulario = document.getElementById("formPerfil");

const contenedor = document.getElementById("contenedorTarjetas");

const contador = document.getElementById("contador");

function actualizarContador() {

    contador.textContent = contenedor.children.length;

}

formulario.addEventListener("submit", function (e) {

    e.preventDefault();

    const nombre = document.getElementById("nombre").value;

    const cargo = document.getElementById("cargo").value;

    const departamento = document.getElementById("departamento").value;

    const foto = document.getElementById("foto").value;

    const tarjeta = document.createElement("div");

    tarjeta.classList.add("tarjeta");

    tarjeta.addEventListener("click", function () {

        tarjeta.classList.toggle("destacada");

    });

    const imagen = document.createElement("img");

    imagen.setAttribute("src", foto);

    const titulo = document.createElement("h2");

    titulo.textContent = nombre;

    const textoCargo = document.createElement("p");

    textoCargo.textContent = "Cargo: " + cargo;

    const textoDepartamento = document.createElement("p");

    textoDepartamento.textContent = "Departamento: " + departamento;

    const boton = document.createElement("button");

    boton.textContent = "Eliminar";

    boton.classList.add("btnEliminar");

    boton.addEventListener("click", function (e) {

        e.stopPropagation();

        tarjeta.remove();

        actualizarContador();

    });

    tarjeta.appendChild(imagen);

    tarjeta.appendChild(titulo);

    tarjeta.appendChild(textoCargo);

    tarjeta.appendChild(textoDepartamento);

    tarjeta.appendChild(boton);

    contenedor.appendChild(tarjeta);

    actualizarContador();

    formulario.reset();

});