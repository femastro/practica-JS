$(document).ready(function(){

    const URL = 'http://localhost:3000/autos';

    ////// Carga del SELECT ///////
    // CONSULTA A API devuelve Un JSON ///        
    ( async () => {
        const response = await fetch(URL);
        const autos = await response.json();
        if(!autos.message){
            let op = `<option value="0">Seleccionar ...</option>`;
            for (auto of autos){
                let opciones =`<option value="${auto.id}">${auto.id}- ${auto.name}</option>`;
                op = op + opciones;
            }
            $('#numeros').html(op);
        }
    })();
    ///////////////////////////////

    $('#verImg').click(function(){
        mostrar();
    })

    $('#boton').click(function(){
        mostrar();
    })

    $('#botonNew').click(function(){
        location.href="new.html";
    })

    function mostrar(){
        var id = $('#numeros').val();
        ( async () => {
            const response = await fetch(URL+'/'+id);
            const auto = await response.json();
            if (auto[0] == undefined){
                alert('Error 404, Image not found !')
            }else{
                location.href=`home.html?id=${id}`;
            }
        })();
    }

    $('#botonReset').click(function(){
        location.href="index.html";
    })

    $('#numeros').change(function(){
        var id = $('#numeros').val();

        ( async () => {
            const response = await fetch(URL+'/'+id);
            const auto = await response.json();
            if (auto[0] == undefined){
                alert('Error 404, Image not found !')
            }else{
                if (id != 0){
                    $("#texto").html(`Eligio el auto # ${id}`);
                    $('#imagen').attr('src', `img/${auto[0].image}`);
                }else{
                    var texto = "Elegir una opción !";
                    $('#imagen').attr('src', `img/0.jpg`);
                    $("#texto").html(`<b>${texto}</b>`);
                }
            }
        })();

    })

})


  

