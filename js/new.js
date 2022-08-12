$(document).ready(function(){

    const URL = 'http://localhost:3000/autos';

    $('#btnSend').click(function(){   
        var form = document.getElementById('form');
        const payload = new FormData(form);
    
        if (payload.get('name').length != 0 && payload.get('description').length != 0 && payload.get('color').length != 0 && payload.get('price').length != 0){   
            
            ( async () => {
                const response = await fetch(URL+'/new', { 
                    method: 'POST', 
                    body: payload
                });
                const result = await response.json();
                alert(result.message);
                location.href="index.html";
            })();
            
        }else{
            alert('Complete todos los campos !');
        }

    })
})