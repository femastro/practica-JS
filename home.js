$(document).ready(function(){
    const URL = 'http://localhost:3000/autos';

    let params = new URLSearchParams(location.search);
    var id = params.get('id');
    $('#imagen').attr('src', `img/${id}.jpg`);
    ( async () => {
        const response = await fetch(URL+'/'+id);
        const auto = await response.json();
        $('#description').html(auto[0].description);
        $('#color').html(auto[0].color);
        $('#price').html(auto[0].price);
    })();
  })