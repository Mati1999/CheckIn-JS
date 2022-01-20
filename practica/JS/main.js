$(function () {



    const URLJSON = "https://jsonplaceholder.typicode.com/posts";


    $.ajax({
        type: 'GET',
        url: URLJSON,
        success: function (respuesta) {

            $('input.autocomplete').autocomplete({
                data: {
                    "Apple": null,
                    "Microsoft": null,
                    "Google": null
                },
            });

        }
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