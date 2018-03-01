$('#frmRegistrarSector').validate({
    rules:{
        NombreSector:{

            required:true,
            minlength:5
        },
        DescripcionSector:{
            
            required:true,
            minlength:15
        }
    },messages:{
        
        NombreSector:{

            required:"Este campo es requerido",
            minlength:"Ingresa 5 caracteres como minimo"
        },
        DescripcionSector:{
            required:"Este campo es requerido",
            minlength:"Ingresa 15 caracteres como minimo"            
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
           
            swal("Ocurrio un error", "Lo sentimos tus datos no fueron registrados, por favor intentalo nuevamente.", "error").then((willDelete) => {
                if (willDelete) {                          
                  //window.location = "/FutPlay/GaiaTemplate/index.html";
                }
            });   
            
        }else{
            
            
            
            swal("Ok","sdfdsfsdfsd","success");
            
            
        } 
        
    });
    
}