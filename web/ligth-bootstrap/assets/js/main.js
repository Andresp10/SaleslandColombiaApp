$('#frmRegistrarSector').validate({
    rules:{
        NombreSector:{

            required:true,
            minlength:5
        },
        DescripcionSector:{
            
            required:true,
            minlength:15,
            maxlength:80
        }
    },messages:{
        
        NombreSector:{

            required:"Este campo es requerido",
            minlength:"Ingresa 5 caracteres como minimo"
        },
        DescripcionSector:{
            required:"Este campo es requerido",
            minlength:"Ingresa 15 caracteres como minimo",
            maxlength:"Ingresa 80 caracteres como maximo"
        }
    },errorElement : 'div',
    errorPlacement: function(error, element) {
      var placement = $(element).data('error');
      if (placement) {
        $(placement).append(error);
      } else {
        error.insertAfter(element);
      }
    },submitHandler: function(){

        swal({
        title: "Confirmar Datos",
        text: "¿Está seguro que desea realizar el registro?",
        icon: "info",
        buttons: true,
        closeonconfirm: false,
        buttons: ["Cancelar", "Sí"]
        })
        .then((willDelete) => {
            if (willDelete) {

              var nombreSector = $("#txtNombreSector").val();
              var descripcionSector = $("#txtDescripcionSector").val();
              $.post("../../../sector/registrar",{NombreSector:nombreSector,DescripcionSector:descripcionSector},function (responsetext) {
                  if(responsetext == "200"){

                        swal("Registro exitoso", "El sector ha sido registrado exitosamente", "success").then((willDelete) => {
                          if (willDelete) {                          
                            //window.location = "/FutPlay/GaiaTemplate/index.html";
                          }
                        });

                    }else{                    
                        swal("Ocurrio un error", "Lo sentimos tus datos no fueron registrados, por favor intentalo nuevamente.", "error").then((willDelete) => {
                         
                        });                                        
                    }                        
                });          
            }
        });                        
    }        
});         
////////////////// LISTAR TODOS LOS SECTORES ////////////////////////////
function listarSectores(){
    
    $.post("/SaleslandColombiaApp/sector/versectores", function (responseText){
        
       if(responseText == "500"){
           
            swal("Ocurrio un error", "Lo sentimos tus datos no fueron registrados, por favor intentalo nuevamente.", "error");
            
        }else{
            $("#listadoSectores").html("");           
            $("#listadoSectores").append(responseText);            
        } 
        
    });
    
}

////////////////////////////// CARGAR DATOS SECTOR ////////////////////////////
function verDatosSector(){
    
    var url = ""+window.location+"";
    var idSector = url.split("_");
    $.post("/SaleslandColombiaApp/sector/cargardatossector",{idSector:idSector[1]},function(responseText){
       
        if (responseText == "500") {
            swal("Ocurrio un error", "Lo sentimos, ocurrió un erro en el servidor, por favor intentalo nuevamente", "error");
        }else{
            
            var dt = JSON.parse(responseText);            
            $.each(dt, function (){
                if (this['Estado'] == "Activo") {
                    
                    $("#cmbEditarEstadoSector").val('Activo');
                }else{
                    
                    $("#cmbEditarEstadoSector").val('Inactivo');
                }               
               $("#txtEditarNombreSector").val(this['NombreSector']);
               $("#txtEditarDescripcionSector").val(this['DescripcionSector']);
                
            });
        }
        
    });
    
}

/////////////////////////// EDITAR SECTOR //////////////////////////////////////////////
$('#frmEditarSector').validate({
    rules:{
        EditarNombreSector:{
            required:true,
            minlength:5
        },
        EditarDescripcionSector:{
            
            required:true,
            minlength:15,
            maxlength:80
        },
        EditarEstadoSector:{
            
            required:true,
            
        }
    },messages:{
        
        EditarNombreSector:{
            required:"Este campo es requerido",
            minlength:"Ingresa 5 caracteres como minimo"
        },
        EditarDescripcionSector:{
            required:"Este campo es requerido",
            minlength:"Ingresa 15 caracteres como minimo",
            maxlength:"Ingresa 80 caracteres como maximo"
        },
        EditarEstadoSector:{
            required:"Este campo es requerido",          
        }
    },errorElement : 'div',
    errorPlacement: function(error, element) {
      var placement = $(element).data('error');
      if (placement) {
        $(placement).append(error);
      } else {
        error.insertAfter(element);
      }
    },submitHandler: function(){

        swal({
        title: "Editar Sector",
        text: "¿Está seguro que desea reemplazar los datos del sector?",
        icon: "info",
        buttons: true,
        closeonconfirm: false,
        buttons: ["No, Cancelar", "Sí"]
        })
        .then((willDelete) => {
            if (willDelete) {

              var url = ""+window.location+"";
              var idSector = url.split("_");
              var nombreSector = $("#txtEditarNombreSector").val();
              var descripcionSector = $("#txtEditarDescripcionSector").val();
              var estadoSector = $("#cmbEditarEstadoSector").val();
              $.post("/SaleslandColombiaApp/sector/editarsector",{IdSector:idSector[1],NombreSector:nombreSector,DescripcionSector:descripcionSector,EstadoSector:estadoSector},function (responsetext) {
                   if(responsetext == "200"){

                        swal("Cambios Guardados", "Los cambios del sector han guardado exitosamente", "success").then((willDelete) => {
                          if (willDelete) {                          
                            window.location = "/SaleslandColombiaApp/ligth-bootstrap/Pages/sector/listarsectores.jsp";
                          }
                        });

                    }else{                    
                        swal("Ocurrio un error", "Lo sentimos tus datos no fueron registrados, por favor intentalo nuevamente.", "error").then((willDelete) => {
                         
                        });                                        
                    }                        
                });          
            }
        });                        
    }        
});
    var $ = document.querySelector.bind(document);

    var ps = new PerfectScrollbar('#container');

    function updateSize() {
      var width = parseInt($('#width').value, 10);
      var height = parseInt($('#height').value, 10);

      $('#container').style.width = width + 'px';
      $('#container').style.height = height + 'px';

      ps.update();
    }
   