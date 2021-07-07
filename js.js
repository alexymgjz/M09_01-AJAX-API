$(document).ready(function () {

       //M09_01: AJAX + API nivel 1
      
          function joke(){
                $('#mostrarArreglo_json').html('');
                $.ajax({
                  type: "GET",
                  url: "http://api.icndb.com/jokes/random",
                  data: "data",
                  dataType: "json",
                  success: function (response) {
                    $('#mostrarArreglo_json').html($('#mostrarArreglo_json').html()+`<li> ${response.value.joke} </li>`);
                  }
                });
          }
        
           joke();


           document.getElementById("ajax").addEventListener("click", joke);
           document.getElementById("jokeFetch").addEventListener("click", jokeFetch);
           
           function jokeFetch(params) {
            $('#mostrarArreglo_json').html('');
               fetch('http://api.icndb.com/jokes/random')
            .then(response => {(response)
              return response.json();
            })
            .then(json=>{ 
             $('#mostrarArreglo_json').html($('#mostrarArreglo_json').html()+`<li> ${json.value.joke} </li>`);
            }) 
           }
         
           
        //M09_01: AJAX + API nivel 1

/*   $("#leer").click(function (e) {
    e.preventDefault();
    $.get("archivo.txt", function (data, textStatus, jqXHR) {
      console.log(`${data} hola`);
      console.log(textStatus);
      console.log(jqXHR);
      $('#json').html(`El texto es: ${data}`);
    });
  });
  $('#get_json').click(function (e) { 
      e.preventDefault();
      $.get("empleados.json", function (data, textStatus, jqXHR) {
          console.log(data);
          console.log(textStatus);
          console.log(jqXHR);
          $('#json').html(`El nombre es:${data[3].nombre}`);
      })
  });
  $('#get_jsonArreglo').click(function (e) { 
    e.preventDefault();
    $('#mostrarArreglo_json').html('');
    $.get("empleados.json", function (data) {
        $.each(data, function (index, item) { 
            $('#mostrarArreglo_json').html($('#mostrarArreglo_json').html()+`<li> El nombre es:${item.nombre} ${item.puesto_de_trabajo} ${item.edad}</li>`); 
        });
      
       
    })
      
  });
  $('#getJason').click(function (e) { 
    e.preventDefault();
    $('#mostrarArreglo_json').html('');
          $.getJSON("obj-con-arreglos.json", function (data) {
          $.each(data, function (index, item) { 
              console.log(item[0]);
          }); 
        
        });
    $.getJSON("obj-con-arreglos.json", function (data) {
      $.each(data.empleados, function (index, item) { 
          console.log(item);
         $('#mostrarArreglo_json').html($('#mostrarArreglo_json').html()+`<li> El nombre es:  ${item.nombre} ${item.puesto_de_trabajo} ${item.edad}</li>`); 
      }); 
    
    });
    $.getJSON("obj-con-arreglos.json", function (data) {
      console.log(data);///
        $.each(data.empleadosTemporales, function (index, item) { 
          console.log(item);
         $('#mostrarArreglo_json').html($('#mostrarArreglo_json').html()+`<li> El nombre es:${item.nombre} ${item.puesto_de_trabajo} ${item.edad}</li>`); 
      }); 
    
    });
  

});
    let empleados; 
    $.getJSON("obj-con-arreglos.json", function (data) {
            empleados=data.empleados;
          
    });

    $('#search').keyup(function (e) { 
      $('#mostrarArreglo_json').html('');
      let nombreEmpleado = $(this).val();
      $.each(empleados, function (indexInArray, item) { 
         if (item.nombre.toLowerCase().indexOf(nombreEmpleado.toLowerCase())!== -1 && nombreEmpleado != '' ) {
          $('#mostrarArreglo_json').html($('#mostrarArreglo_json').html()+`<li> El nombre es:${item.nombre} ${item.puesto_de_trabajo} ${item.edad}</li>`); 
         } 
      });
    }); */
});

