$(document).ready(function(){

    const URL = 'http://localhost:3000/autos';

    /// Datos Hardcodeados , estos datos tiene que venir de una BD.
    const AUTOS = [
        {id: 1, name:'Chevrolet'},
        {id: 2, name:'Nissan'},
        {id: 3, name:'Fiat'},
        {id: 4, name:'Volkswagen'}
    ];
    
    ////// Carga del SELECT ///////
    // CONSULTA A API devuelve Un JSON ///        
    ( async () => {
        const response = await fetch(URL);
        const autos = await response.json();
        let op = `<option value="0">Seleccionar ...</option>`;
        for (auto of autos){
            let opciones =`<option value="${auto.id}">${auto.id}- ${auto.name}</option>`;
            op = op + opciones;
        }
        $('#numeros').html(op);
    })();
    ///////////////////////////////

    $('#verImg').click(function(){
        mostrar();
    })

    $('#boton').click(function(){
        mostrar();
    })

    function mostrar(){
        var id = $('#numeros').val();
        ( async () => {
            const response = await fetch(URL+'/'+id);
            const auto = await response.json();
            if (auto[0] == undefined){
                alert('Error 404, Image not found !')
            }else{
                location.href=`file:///Users/fernando/Desktop/directos/node/home.html?id=${id}`;
            }
        })();
    }

    $('#botonReset').click(function(){
        location.href="index.html";
    })

    $('#numeros').change(function(){
        var valor = $('#numeros').val();
        if (valor != 0){
            $("#texto").html(`Eligio el auto # ${valor}`);
            $('#imagen').attr('src', `img/${valor}.jpg`);
        }else{
            var texto = "Elegir una opción !";
            $('#imagen').attr('src', `img/0.jpg`);
            $("#texto").html(`<b>${texto}</b>`);
        }
    })

})


  

