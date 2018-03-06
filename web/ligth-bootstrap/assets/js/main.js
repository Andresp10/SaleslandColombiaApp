    $('#frmRegistrarSector').validate({
    rules: {
        NombreSector: {
            required: true,
            minlength: 5
        },
        DescripcionSector: {
            required: true,
            minlength: 15,
            maxlength: 80
        }
    }, messages: {

        NombreSector: {
            required: "Este campo es requerido",
            minlength: "Ingresa 5 caracteres como minimo"
        },
        DescripcionSector: {
            required: "Este campo es requerido",
            minlength: "Ingresa 15 caracteres como minimo",
            maxlength: "Ingresa 80 caracteres como maximo"
        }
    }, errorElement: 'div',
    errorPlacement: function (error, element) {
        var placement = $(element).data('error');
        if (placement) {
            $(placement).append(error);
        } else {
            error.insertAfter(element);
        }
    }, submitHandler: function () {

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
                                        window.location = "/SaleslandColombiaApp/ligth-bootstrap/Pages/sector/listarsectores.jsp";
                                    }
                                });

                            } else {
                                swal("Ocurrio un error", "Lo sentimos tus datos no fueron registrados, por favor intentalo nuevamente.", "error");
                            }
                        });
                    }
                });
    }
});
////////////////// LISTAR TODOS LOS SECTORES ////////////////////////////
function listarSectores() {

    $.post("/SaleslandColombiaApp/sector/versectores", function (responseText) {

        if (responseText == "500") {

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
            
        },
        DescripcionSector: {

            required: "Este campo es requerido"
            
        }
    }, errorElement: 'div',
    errorPlacement: function (error, element) {
        var placement = $(element).data('error');
        if (placement) {
            $(placement).append(error);
        } else {
            error.insertAfter(element);
        }
    }, submitHandler: function () {

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
////////////////// LISTAR TODOS LOS SECTORES ////////////////////////////
function listarSectores() {

    $.post("/SaleslandColombiaApp/sector/versectores", function (responseText) {

        if (responseText == "500") {

            swal("Ocurrio un error", "Lo sentimos tus datos no fueron registrados, por favor intentalo nuevamente.", "error");

        } else {
            $("#listadoSectores").html("");
            $("#listadoSectores").append(responseText);
        }

    });

}
//REGISTRAR CARGOS EN LA EMPRESA//
$('#frmRegistrarCargo').validate({
    rules: {
        NombreCargo: {

            required: true,
            minlength: 5
        },
        DescripcionCargo: {

            required: true,
            minlength: 15,
            maxlength: 80
        },
        Salario:{
            required: true,
            min: 781.242
        }
     
        
        
    }, messages: {

        NombreCargo: {

            required: "Este campo es requerido",
            minlength: "Ingresa 5 caracteres como minimo"
        },
        DescripcionCargo: {
            required: "Este campo es requerido",
            minlength: "Ingresa 15 caracteres como minimo",
            maxlength: "Ingresa 80 caracteres como maximo"
        },
        Salario: {
            required: "Este campo es requerido",
            min: "El valor minimo es de 781.242"
            
        }
       
        
    }, errorElement: 'div',
    errorPlacement: function (error, element) {
        var placement = $(element).data('error');
        if (placement) {
            $(placement).append(error);
        } else {
            error.insertAfter(element);
        }
    }, submitHandler: function () {

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

                        var nombreCargo = $("#txtNombreCargo").val();
                        var descripcionCargo = $("#txtDescripcionCargo").val();
                        var salario = $("#txtSalario").val();
                        $.post("../../../cargo/registrar", {NombreCargo: nombreCargo, DescripcionCargo: descripcionCargo, Salario: salario}, function (responsetext) {
                            if (responsetext == "200") {

                                swal("Registro exitoso", "El sector ha sido registrado exitosamente", "success").then((willDelete) => {
                                    if (willDelete) {
                                        //window.location = "/FutPlay/GaiaTemplate/index.html";
                                    }
                                });

                            } else {
                                swal("Ocurrio un error", "Lo sentimos tus datos no fueron registrados, por favor intentalo nuevamente.", "error").then((willDelete) => {

                                });
                            }
                        });
                    }
                });
    }
});
////////////////// LISTAR TODOS LOS CARGOS ////////////////////////////
function listarCargos() {
    $.post("/SaleslandColombiaApp/cargo/vercargos", function (responseText) {
        if (responseText == "500") {
            swal("Ocurrio un error", "Lo sentimos tus datos no fueron cargados.", "error");
        } else {
            $("#listadoCargos").html("");
            $("#listadoCargos").append(responseText);
            swal("Ok", "Listado", "success");
        }
    });
}
///////////////// CARGAR COMBO DE SECTORES /////////////////////////////////
function cargarSectores(){
    
    $.post("/SaleslandColombiaApp/sector/cargarcombosector",function (responseText){
        
        if (responseText == 500) {
            swal("Ocurrio un error", "Lo ocuttió un error al intentar cargar los sectores.", "error");
        }else{
            var dt = JSON.parse(responseText);   
            for (var key in dt) {
                if (dt.hasOwnProperty(key)) {
                  var val = dt[key];
                    $("#cmbSector").append("<option value='"+val['IdSector']+"'>"+val['NombreSector']+"</option>")
                    
                }
            }
        } 
        
    });
}
///////////////////////// REGISTRAR CANAL ///////////////////////////////////////
$('#frmRegistrarCanal').validate({
    rules: {
        NombreCanal: {
            required: true,
            minlength: 5
        },
        DescripcionCanal: {
            required: true,
            minlength: 15,
            maxlength: 80
        },
        Sector:{
            required: true
        }
    }, messages: {

        NombreCanal: {
            required: "Este campo es requerido",
            minlength: "Ingresa 5 caracteres como minimo"
        },
        DescripcionCanal: {
            required: "Este campo es requerido",
            minlength: "Ingresa 15 caracteres como minimo",
            maxlength: "Ingresa 80 caracteres como maximo"
        },
        Sector:{
            required: "Este campo es requerido"
        }
    }, errorElement: 'div',
    errorPlacement: function (error, element) {
        var placement = $(element).data('error');
        if (placement) {
            $(placement).append(error);
        } else {
            error.insertAfter(element);
        }
    }, submitHandler: function () {

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
                
                var sectorCanal = $("#cmbSector").val();
                var nombreCanal = $("#txtNombreCanal").val();
                var descripcionCanal = $("#txtDescripcionCanal").val();
                $.post("/SaleslandColombiaApp/canal/registrar",{SectorCanal:sectorCanal,NombreCanal:nombreCanal,DescripcionCanal:descripcionCanal},function (responsetext) {
                    if(responsetext == "200"){

                        swal("Registro exitoso", "El canal ha sido registrado exitosamente", "success").then((willDelete) => {
                            if (willDelete) {
                                //window.location = "/SaleslandColombiaApp/ligth-bootstrap/Pages/sector/listarsectores.jsp";
                            }
                        });

                    } else {
                        swal("Ocurrio un error", "Lo sentimos tus datos no fueron registrados, por favor intentalo nuevamente.", "error");
                    }
                });
            }
        });
    }
});
////////////////// LISTAR TODOS LOS CANALES ////////////////////////////
function listarCanales() {

    $.post("/SaleslandColombiaApp/canal/varcanales", function (responseText) {

        if (responseText == "500") {

            swal("Ocurrio un error", "Lo sentimos tus datos no fueron registrados, por favor intentalo nuevamente.", "error");
            
        }else{
             
            $("#listadoSectores").html("");           
            $("#listadoCanales").append(responseText);            
        } 
        
    });
}
///////////////////// VER DATOS CANAL ///////////////////////////////
function verDatosCanal(){
    
    var url = ""+window.location+"";
    var IdCanal = url.split("_");
    $.post("/SaleslandColombiaApp/canal/cargardatoscanal",{idCanal:IdCanal[1]},function(responseText){
       
        if (responseText == "500") {
            swal("Ocurrio un error", "Lo sentimos, ocurrió un erro en el servidor, por favor intentalo nuevamente", "error");
        }else{
            
            var dt = JSON.parse(responseText);
            console.log(dt);
            if (dt[3] == "Activo") {
                $("#cmbEditarEstadoCanal").val('Activo');
            }else{
                
                $("#cmbEditarEstadoCanal").val('Inactivo');
            }
            $("#txtEditarNombreCanal").val(dt[1]);
            $("#txtEditarDescripcionCanal").val(dt[2]);
            $("#cmbSector").val(""+dt[4]+"");
        }
        
    });
    
}
/////////////////////////// EDITAR CANAL //////////////////////////////////////////////
$('#frmEditarCanal').validate({
    rules:{
        EditarEstadoCanal:{
            
          required:true  
        },
        EditarNombreCanal:{
            required:true,
            minlength:5
        },
        EditarDescripcionCanal:{
            
            required:true,
            minlength:15,
            maxlength:80
        },
        EditarEstadoSectorCanal:{
            
            required:true,
            
        }
    },messages:{
        EditarEstadoCanal:{
            
          required:"Este campo es requerido"  
        },
        EditarNombreCanal:{
            required:"Este campo es requerido",
            minlength:"Ingresa 5 caracteres como minimo"
        },
        EditarDescripcionCanal:{
            required:"Este campo es requerido",
            minlength:"Ingresa 15 caracteres como minimo",
            maxlength:"Ingresa 80 caracteres como maximo"
        },
        EditarEstadoSectorCanal:{
            required:"Este campo es requerido",          

        }
    }, errorElement: 'div',
    errorPlacement: function (error, element) {
        var placement = $(element).data('error');
        if (placement) {
            $(placement).append(error);
        } else {
            error.insertAfter(element);
        }
    }, submitHandler: function () {

        swal({

        title: "Editar Canal",
        text: "¿Está seguro que desea reemplazar los datos del canal?",
        icon: "info",
        buttons: true,
        closeonconfirm: false,
        buttons: ["No, Cancelar", "Sí"]
        })
        .then((willDelete) => {
            if (willDelete) {

              var url = ""+window.location+"";
              var idCanal = url.split("_");
              var nombreCanal = $("#txtEditarNombreCanal").val();
              var descripcionCanal = $("#txtEditarDescripcionCanal").val();
              var estadoCanal = $("#cmbEditarEstadoCanal").val();
              var sectorCanal = $("#cmbSector").val();
              $.post("/SaleslandColombiaApp/canal/editarcanal",{IdCanal:idCanal[1],NombreCanal:nombreCanal,DescripcionCanal:descripcionCanal,EstadoCanal:estadoCanal,SectorCanal:sectorCanal},function (responsetext) {
                   if(responsetext == "200"){

                        swal("Cambios Guardados", "Los cambios del sector han guardado exitosamente", "success").then((willDelete) => {
                          if (willDelete) {                          
                            window.location = "/SaleslandColombiaApp/ligth-bootstrap/Pages/canal/listarcanal.jsp";
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
///////////////////////// CARGAR COMBO CARGO //////////////////////
function cargarCargoOOOOOO(idSector){
    alert("combo cargo functio ---> "+idSector);
    $.post("/SaleslandColombiaApp/cargo/getallcargosregistrousuario",{IdSector:idSector},function (responseText){
       
        if (responseText == "500") {
            swal("Ocurrio un error", "Lo sentimos tus datos no fueron registrados, por favor intentalo nuevamente.", "error");
        }else{
            
            alert(responseText);
            var dt = JSON.parse(responseText);
            for (var key in dt) {
                if (dt.hasOwnProperty(key)) {
                    var val = dt[key];
                    alert("INGRESANDO LA DATA AL COMBO");
                    //CONTINUAR REPARANDO
                    //$("#cmbCargoUsuarioRegistro").append("<option value='"+val['IdCargo']+"'>"+val['NombreCargo']+"</option>");                    
                    $('#lolComboCargo').append(new Option("text", 54654));
                    //$("#lolComboCargo").append("<option value='jsjsjsj'>jsjsjsjs</option>");
                    $("#txtLol").val("------------> "+val['NombreCargo']);
                    alert("FINISH DATA INGRESADA ---> " + val['IdCargo'] +" ------> "+val['NombreCargo']);
                }
            }
            
        }
        
    });
    
}


////////////////////Funciones para validar password email y telefono////////////////7
    $.validator.addMethod("pwcheck1", function(value) {
       return /^[A-Za-z0-9\d=!\-@._*]*$/.test(value) 
           && /[a-z]/.test(value) // evalua que tenga una minuscula como minimo
    });
    $.validator.addMethod("pwcheck2", function(value) {
       return /^[A-Za-z0-9\d=!\-@._*]*$/.test(value) 
           && /\d/.test(value) // evalua que tenga un digito como minimo
    });
    $.validator.addMethod("pwcheck3", function(value) {
       return /^[A-Za-z0-9\d=!\-@._*]*$/.test(value) 
           && /[A-Z]/.test(value) // evalua que tenga una mayuscula como minimo
    });
    $.validator.addMethod("validarEmail", function(value){
       var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
       return pattern.test(value);
    });
    $.validator.addMethod("validarTelefono", function(value){
       var pattern = /^3[0,1,2,3,5][0-9]{8}$/;
       return pattern.test(value);
    });
    
    //Validar fecha: https://stackoverflow.com/questions/43276378/jquery-validate-date-between-a-date-range
    $.validator.addMethod("dateRange", function(value, element, params) {
        
       try {           
            var date = new Date(value);
            if (date >= params.from && date <= params.to) {
              return true;
            }
        } catch (e) {}
      return false;
    }, 'message');

    var fromDate = new Date("2017-02-01");
    
    var toDate = new Date("2017-12-31");
    $.validator.addClassRules({
      myDateFieldRangeValidate: {
        dateRange: {
          from: fromDate,
          to: toDate
        }
      }
    });
//////////////////////////////// REGISTRAR USUARIO ///////////////////////////////////
/*$("#frmRegistrarUsuario").validate({    
    rules:{
        TipoDocumentoUsuario:{
            required:true
        },DocumentoUsuario:{
            required:true,
            maxlength:15,
            minlength:10            
        },NombreUsuario:{
            required:true,
            minlength:3,
            maxlength:50            
        },ApellidoUsuario:{
            required: true,
            minlength:3,
            maxlength:50
        },EmailUsuario:{
            email:true,
            required:true,
            validarEmail:true

        },ContraseniaUsuario:{

            required:true,
            minlength:8,
            pwcheck1:true,
            pwcheck2:true,
            pwcheck3:true

        },ConfirmarContraseniaUsuario:{
            
            required:true,
            equalTo:"#txtContraseniaUsuario"
        },DireccionUsuario:{
            
            required:true,
            minlength:10,
            maxlength:35
        },GeneroUsuario:{            
            required:true
        },CelularUsuario:{
            
            required:true,
            validarTelefono:true
        },TelefonoUsuario:{
            
            required:true
            
        },FechaNacimientoUsuario:{
            
            required:true
            
        }
    },messages:{

        TipoDocumentoUsuario:{

            required:"Este campo es requerido"

        },DocumentoUsuario:{
            required:"Este campo es requerido",
            maxlength:"Ingresa 15 caracteres como maximo",
            minlength:"Ingresa 10 caracteres como minimo"

        },NombreUsuario:{
            required:"Este campo es requerido",
            minlength:"Ingresa 3 caracteres como minimo",
            maxlength:"Ingresa 50 caracteres como maximo"
        },ApellidoUsuario:{
            required: "Este campo es requerido",
            minlength:"Ingresa como minimo 3 caracteres",
            maxlength:"Ingresa como maximo 50 caracteres"
        },EmailUsuario:{
            email:"Ingresa una direccion de correo electronico valida",
            required:"Este campo es requerido",
            validarEmail:"Ingresa una direccion de correo electronico valida"

        },ContraseniaUsuario:{

            required:"Este campo es requerido",
            minlength:"Ingresa 8 caracteres como minimo",
            pwcheck1:"La contraseña debe contener una minuscula como minimo",
            pwcheck2:"La contraseña debe contener un número como minimo",
            pwcheck3:"La contraseña debe contener una mayuscula como minimo"

        },ConfirmarContraseniaUsuario:{
            required:"Este campo es requerido",
            equalTo:"Las contraseñas no coinciden"
        },DireccionUsuario:{
            
            required:"Este campo es requerido",
            minlength:"Ingresa 10 caracteres como minimo",
            maxlength:"Ingresa 35 caracteres como maximo"
        },GeneroUsuario:{            
            required:"Este campo es requerido"
        },CelularUsuario:{            
            required:"Este campo es requerido",
            validarTelefono:"Ingresa un número de celular valido"
        },TelefonoUsuario:{            
            required:"Este campo es requerido"
        },FechaNacimientoUsuario:{
            
            required:"Este campo es requerido"
            
        }
    }, errorElement: 'div',
    errorPlacement: function (error, element) {
        var placement = $(element).data('error');
        if (placement) {
            $(placement).append(error);
        } else {
            error.insertAfter(element);
        }
    }, submitHandler: function () {


          alert("Validacion correcta (._.)");
//        swal({
//
//        title: "Editar Canal",
//        text: "¿Está seguro que desea reemplazar los datos del canal?",
//        icon: "info",
//        buttons: true,
//        closeonconfirm: false,
//        buttons: ["No, Cancelar", "Sí"]
//        })
//        .then((willDelete) => {
//            if (willDelete) {
//
//              var url = ""+window.location+"";
//              var idCanal = url.split("_");
//              var nombreCanal = $("#txtEditarNombreCanal").val();
//              var descripcionCanal = $("#txtEditarDescripcionCanal").val();
//              var estadoCanal = $("#cmbEditarEstadoCanal").val();
//              var sectorCanal = $("#cmbSector").val();
//              $.post("/SaleslandColombiaApp/canal/editarcanal",{IdCanal:idCanal[1],NombreCanal:nombreCanal,DescripcionCanal:descripcionCanal,EstadoCanal:estadoCanal,SectorCanal:sectorCanal},function (responsetext) {
//                   if(responsetext == "200"){
//
//                        swal("Cambios Guardados", "Los cambios del sector han guardado exitosamente", "success").then((willDelete) => {
//                          if (willDelete) {                          
//                            window.location = "/SaleslandColombiaApp/ligth-bootstrap/Pages/canal/listarcanal.jsp";
//                          }
//                        });
//
//                    }else{                    
//                        swal("Ocurrio un error", "Lo sentimos tus datos no fueron registrados, por favor intentalo nuevamente.", "error").then((willDelete) => {
//                         
//                        });                                        
//                    }                        
//                });          
//            }
//        });                        
    }  
});*/


function InicializarFormularioRegistro() {   
    // Wizard Initialization
    $('.card-wizard').bootstrapWizard({
        'tabClass': 'nav nav-pills',
        'nextSelector': '.btn-next',
        'previousSelector': '.btn-previous',

        onNext: function(tab, navigation, index) {
            var $valid = $('#frmRegistrarUsuario').valid();
            if (!$valid) {
                $validator.focusInvalid();
                return false;
            }
        },

        onInit: function(tab, navigation, index) {
            //check number of tabs and fill the entire row
            var $total = navigation.find('li').length;
            var $wizard = navigation.closest('.card-wizard');

            $first_li = navigation.find('li:first-child a').html();
            $moving_div = $('<div class="moving-tab">' + $first_li + '</div>');
            $('.card-wizard .wizard-navigation').append($moving_div);

            refreshAnimation($wizard, index);

            $('.moving-tab').css('transition', 'transform 0s');
        },

        onTabClick: function(tab, navigation, index) {
            var $valid = $('#frmRegistrarUsuario').valid();

            if (!$valid) {
                return false;
            } else {
                return true;
            }
        },

        onTabShow: function(tab, navigation, index) {
            var $total = navigation.find('li').length;
            var $current = index + 1;

            var $wizard = navigation.closest('.card-wizard');

            // If it's the last tab then hide the last button and show the finish instead
            if ($current >= $total) {
                $($wizard).find('.btn-next').hide();
                $($wizard).find('.btn-finish').show();
            } else {
                $($wizard).find('.btn-next').show();
                $($wizard).find('.btn-finish').hide();
            }

            button_text = navigation.find('li:nth-child(' + $current + ') a').html();

            setTimeout(function() {
                $('.moving-tab').text(button_text);
            }, 150);

            var checkbox = $('.footer-checkbox');

            if (!index == 0) {
                $(checkbox).css({
                    'opacity': '0',
                    'visibility': 'hidden',
                    'position': 'absolute'
                });
            } else {
                $(checkbox).css({
                    'opacity': '1',
                    'visibility': 'visible'
                });
            }

            refreshAnimation($wizard, index);
        }
    });


    // Prepare the preview for profile picture
    $("#wizard-picture").change(function() {
        readURL(this);
    });

    $('[data-toggle="wizard-radio"]').click(function() {
        wizard = $(this).closest('.card-wizard');
        wizard.find('[data-toggle="wizard-radio"]').removeClass('active');
        $(this).addClass('active');
        $(wizard).find('[type="radio"]').removeAttr('checked');
        $(this).find('[type="radio"]').attr('checked', 'true');
    });

    $('[data-toggle="wizard-checkbox"]').click(function() {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).find('[type="checkbox"]').removeAttr('checked');
        } else {
            $(this).addClass('active');
            $(this).find('[type="checkbox"]').attr('checked', 'true');
        }
    });

    $('.set-full-height').css('height', 'auto');

    //Function to show image before upload

    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function(e) {
                $('#wizardPicturePreview').attr('src', e.target.result).fadeIn('slow');
            }
            reader.readAsDataURL(input.files[0]);
        }
    }

    $(window).resize(function() {
        $('.card-wizard').each(function() {
            $wizard = $(this);

            index = $wizard.bootstrapWizard('currentIndex');
            refreshAnimation($wizard, index);

            $('.moving-tab').css({
                'transition': 'transform 0s'
            });
        });
    });

    function refreshAnimation($wizard, index) {
        $total = $wizard.find('.nav li').length;
        $li_width = 100 / $total;

        total_steps = $wizard.find('.nav li').length;
        move_distance = $wizard.width() / total_steps;
        index_temp = index;
        vertical_level = 0;

        mobile_device = $(document).width() < 600 && $total > 3;

        if (mobile_device) {
            move_distance = $wizard.width() / 2;
            index_temp = index % 2;
            $li_width = 50;
        }

        $wizard.find('.nav li').css('width', $li_width + '%');

        step_width = move_distance;
        move_distance = move_distance * index_temp;

        $current = index + 1;

        if ($current == 1 || (mobile_device == true && (index % 2 == 0))) {
            move_distance -= 8;
        } else if ($current == total_steps || (mobile_device == true && (index % 2 == 1))) {
            move_distance += 8;
        }

        if (mobile_device) {
            vertical_level = parseInt(index / 2);
            vertical_level = vertical_level * 38;
        }

        $wizard.find('.moving-tab').css('width', step_width);
        $('.moving-tab').css({
            'transform': 'translate3d(' + move_distance + 'px, ' + vertical_level + 'px, 0)',
            'transition': 'all 0.5s cubic-bezier(0.29, 1.42, 0.79, 1)'

        });
    }
}
