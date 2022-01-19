$(function () {



    const URLJSON = "data/data.json";

    const boton = $('#buttonApi');

    let nuevoUsuario = { nombre: "Michi",apellido: "Pichi" };

    boton.click(() => {
        $.ajax({
            url: URLJSON,
            success: (respuesta) => {
                for (const item of respuesta) {
                    $('main').append(`<h2>${item.texto}</h2>
                        <p>${item.correo}</p>
                    `)
                }

            }
        })
    })

    // const URLJSON = "https://jsonplaceholder.typicode.com/posts";

    // const boton = $('#botonSubmit');

    // boton.click((e) => {
    //     e.preventDefault();
    //     console.log("Hice Click");
    //     let nuevoUsuario = JSON.stringify({
    //         texto: `${boton.find('#texto')}`,
    //         correo: `${boton.find('#correo')}`
    //     })
    //     $.ajax({
    //         type: "POST",
    //         contentType: "application/json",
    //         url: URLJSON,
    //         data: nuevoUsuario.toJson,
    //         success: (respuesta) => {
    //             console.log("Hice Click2"),
    //                 $('main').append(`<h2>${respuesta.texto}</h2>
    //                      <p>${respuesta.coreo}</p>
    //                  `)
    //         }
    //     })
    // })







})