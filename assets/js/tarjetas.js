// creamos array de objetos
const proyectos = [
    {
        id: 1,
        name: "Sitio Web Multipro",
        img: "./assets/images/webmultipro.png",
        txt: "Sitio web perfecto para el sector alimenticio:  Ideal para restaurantes, tiendas de productos, panaderías y cualquier negocio relacionado con la comida. Diseñado para destacar tus productos y atraer a tus clientes de manera efectiva",
        btn: "Ver más",
    },
    {
        id: 2,
        name: "YouTube Downloads",
        img: "./assets/images/descarga_de_youtube.png",
        txt: "Proyecto en Python con Tkinter y CustomTkinter: Desarrollado para facilitar la descarga continua de videos de YouTube sin limitaciones, brindando una experiencia fluida y sin restricciones.<br>Puedes revisar el codigo en el siguiente enlace de abajo.",
        btn: "Ver más",
    },
    {
        id: 3,
        name: "Login con Flet",
        img: "./assets/images/inicio_sesion_flet.png",
        txt: "Aplicación en Flet y Python: Desarrollada para ofrecer un inicio de sesión seguro y eficiente, combinando la flexibilidad de Flet con la potencia de Python para una experiencia de usuario fluida.<br>Puedes revisar el codigo en el siguiente enlace de abajo.",
        btn: "Ver más",
    },
];

// accedemos al div padre de las card
let card = document.getElementById("tarjetas");

proyectos.map((x) => {
    card.innerHTML += `
        <div class="col-md-4">
            <div class="card">                
                <img src="${x.img}" class="card-img-top img-fluid" alt="${x.name}">                
                <div class="card-body">
                    <h5 class="card-title">${x.name}</h5>
                    <p class="card-text">${x.txt}</p>
                    <a href="https://betorockers.github.io/WebMultipro/" class="btn btn-primary" target="_blank">${x.btn}</a>

                </div>
            </div>
        </div>
    `;
})