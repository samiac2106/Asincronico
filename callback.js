//funcion principal
//base de datos ficticia
let datosUsuario={
    usuario:"samiac2106",
    password:"Admin123*"
}
//declarar o decir que hace la funcion principal
//llamar a mi función secundaria o callback
function conectarConNetflix(datos, generarRespuestaCallback){
    console.log("procesando la petición.....")
    setTimeout(function(){

        if(datos.usuario==="samiac2106" && datos.password==="Admin123*"){
            //login ok
            generarRespuestaCallback(200)
        }
        else{
            //login fail
            generarRespuestaCallback(204)    
        }

    },5000)

    //preguntar si los datos son correctos 

} 
//utilizar o llamar la función principal
//declaro lo que hace el callback 
conectarConNetflix(datosUsuario,function(codigo){//estoy en la zona comun 
    if (codigo==200){
        console.log("Bienvenido a Netflix")
        console.log("cargando peliculas")
    }else{
        console.log("No estas registrado, suscribete.....")
    }

})  
function conectarConNetflix(datos){
    console.log("procesando la petición.....");

    let promesa =new Promise(function(resolve,reject){   

    setTimeout(function(){

        if(datos.usuario==="samiac2106" && datos.password==="Admin123*"){
            //login ok
           resolve(200,"Bienvenido a Netflix")
        } else{
            //login fail
            reject(204,"No estas registrado, inscribete")    
        }
    },5000)
  })
    return promesa;

    //preguntar si los datos son correctos 


} 