$(document).ready(function () {
    // declaro los usuarios;
    let usuarios = [
        {
            img: "./multimedia/birham.png",
            nombre: "Birham Fernandez",
            desc: "Alumno de Aulaestudio, desea invadir polonia."
        },
        {
            img: "./multimedia/ivan.png",
            nombre: "Ivan Alfaya",
            desc: "Alumno de Aulaestudio, le gusta leer cosas de asiaticos."
        },
        {
            img: "./multimedia/eder.png",
            nombre: "Eder Martinez",
            desc: "Alumno de Aulaestudio, le gusta el furbo."
        },
        {
            img: "./multimedia/agus.png",
            nombre: "Agustin Alonso",
            desc: "Alumno de Aulaestudio, se denomina así mismo como un druida."
        },
        {
            img: "./multimedia/pellejero.png",
            nombre: "Daniel Pellejero",
            desc: "Alumno de Aulaestudio, no le gusta la chamba."
        },
        {
            img: "./multimedia/dani.png",
            nombre: "Daniel Calvar",
            desc: "Alumno de Aulaestudio, es Jesucristo en programción."
        },
        {
            img: "./multimedia/david.png",
            nombre: "David Priego",
            desc: "Alumno de Aulaestudo, le mola chambear sobre todo en bases de datos."
        },
        {
            img: "./multimedia/idriss.png",
            nombre: "Idriss El Aziri",
            desc: "Alumno de Aulaestudio, es campeón gallego (solo le ganó a uno)."
        },
        {
            img: "./multimedia/angel.png",
            nombre: "Ángel Panadero",
            desc: "Alumno de Aulaestudio, presidente de Marlboro."
        },
        {
            img: "./multimedia/diego.png",
            nombre: "Diego Pérez",
            desc: "Alumno de Aulaestudio, es traficante de objetos (cartas, videojuegos, etc...)."
        },
        {
            img: "./multimedia/rober.png",
            nombre: "Roberto Castro",
            desc: "Profesor de Aulaestudio, es el ADMIN de la clase."
        }
    ];

    // meter todos los usuarios dentro del contenedor principal
    for (let i = 0; i < usuarios.length; i++) {
        const usuario = usuarios[i];
        $(".contenedor-cart").append(
            `<div class="card">
            <img src="${usuario.img}" alt="Usuario">
            <div class="info">
                <h2 class="nombre">${usuario.nombre}</h2>
                <p>${usuario.desc}</p>
            </div>
        </div>`
        );
    };

    // Cunado le den click al boton de search se hara lo siguiente;
    $('.boton').on('click', function () {
        // obtener lo que se escribe en el input;
        const nombreFiltado = $('.input').val().toLowerCase();
        // vaciar  el contenido del contenedor;
        $('.contenedor-cart').empty();
        // filtrar los usuarios que coincidan con el valor del input;
        const flitrar = usuarios.filter(usuario => usuario.nombre.toLowerCase().includes(nombreFiltado));
        // Poner en el contenedor las cartas de los usurios que coincidan;
        for (const usuario of flitrar) {
            $(".contenedor-cart").append(
                `<div class="card">
                    <img src="${usuario.img}" alt="Usuario">
                    <div class="info">
                        <h2 class="nombre">${usuario.nombre}</h2>
                        <p>${usuario.desc}</p>
                    </div>
                </div>`
            );
        }

        if ($('.contenedor-cart').length === 0) {
            $('.contenedor-cart').append(
                `<div><h2>NO HAY USUARIOS CON ES</div>`
            )
        }
    });

});