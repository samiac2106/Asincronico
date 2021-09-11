let datosUsuario={
    usuario:"samiac2106",
    password:"Admin123*"
}
function conectarConNetflix(datos){
    console.log("procesando la petición.....");

    let promesa =new Promise(function(resolve,reject){   

    setTimeout(function(){

        if(datos.usuario==="samiac2106" && datos.password==="Admin123*"){
            //login ok
           resolve("Bienvenido a Netflix")
        } else{
            //login fail
            reject("No estas registrado, inscribete....")    
        }
    },5000)
  })
  return promesa;
} 
  conectarConNetflix(datosUsuario)
  .then(function(respuesta){
      console.log(respuesta)
  })
  .catch(function(respuesta){
      console.log(respuesta)
  })
