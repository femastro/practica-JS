$(document).ready(function(){
    const URL = 'http://localhost:3000/autos';

    let params = new URLSearchParams(location.search);
    var id = params.get('id');
    $('#imagen').attr('src', `img/${id}.jpg`);
    ( async () => {
        const response = await fetch(URL+'/'+id);
        const auto = await response.json();
        $('#description').val(auto[0].description);
        $('#color').val(auto[0].color);
        $('#price').val(auto[0].price);
    })();

    $('#btnUpdate').click(function(){
        var form = document.getElementById('form');

        const data = new FormData(form);
        const payload = new URLSearchParams(data);
   
        ( async () => {
            const response = await fetch(URL+'/update/'+id, { method: 'POST', body: payload });
            const result = await response.json();
            alert(result.message);
            window.location.reload();
        })();
    })
  })