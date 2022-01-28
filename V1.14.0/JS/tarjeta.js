$(() => {



    //////////////////////  TARJETA COMPRAR  //////////////////////


    let btnContratar = $('.btnComprar');
    btnContratar.click(() => {
        formTarjeta.toggleClass("ocultarTarjeta");
    })

    const postTarjetaURL = "https://jsonplaceholder.typicode.com/posts";


    btnTarjetaComprar.click((e) => {
        e.preventDefault();

        if (cardNumber.val().length <= 10 || cardCode.val().length <= 2 || cardExpiration.val().length <= 3 || DNI.val().length < 8) {
            mainAll.append(`
                <div class="msjErrorTarjeta" id="msjErrorTarjeta">
                    <h4>Tienes que ingresar todos los datos</h4>
                </div>
                `)
            $("#msjErrorTarjeta").fadeIn(300).delay(3000).fadeOut(200);
            setTimeout(() => {
                $("#msjErrorTarjeta").remove()
            },3600);
            formTarjeta.toggleClass("ocultarTarjeta");
        } else {
            let nuevaTarjeta = {
                numeroTarjeta: cardNumber.val(),
                codigo: cardCode.val(),
                vencimiento: cardExpiration.val(),
                DNI: DNI.val()
            };
            $.ajax({
                method: "POST",
                url: postTarjetaURL,
                data: nuevaTarjeta,
                success: function (respuesta) {
                    mainAll.append(`
                    <div class="msjContratado" id="msjContratado">
                        <h4>Gracias por adquirir nuestros productos!</h4>
                    </div>
                    `)
                    $("#msjContratado").fadeIn(300).delay(3000).fadeOut(300);
                    setTimeout(() => {
                        $("#msjContratado").remove()
                        cardNumber.val("");
                        cardCode.val("");
                        cardExpiration.val("");
                        DNI.val("");
                    },3600);
                    carritoBody.text(``);
                    formTarjeta.toggleClass("ocultarTarjeta");
                    localStorage.setItem('compra',true);
                }
            })
        }
    })

    const btnTarjetaCancelar = $('#btnTarjetaCancelar')
    btnTarjetaCancelar.click(() => {
        formTarjeta.toggleClass("ocultarTarjeta");
    })


})