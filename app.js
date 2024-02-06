let numeroSecreto=0;
let intentos=0;
let listaNumeroSorteados =[];
let numeroMaximo=10;



// declaracion de funcion con parametros, nos sirve para economizar procesos
  //  y eliminar lineas de codigo no necesarias
   function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
   }

   function generarNumero() {
   let numeroGenerado= Math.floor(Math.random()*numeroMaximo)+1;
   
      console.log(numeroGenerado);
      console.log(listaNumeroSorteados);

      if(listaNumeroSorteados.length == numeroMaximo){
         asignarTextoElemento('p','ya se sortearon todos los numeros posibles');
      }else
      {
         
            if(listaNumeroSorteados.includes(numeroGenerado)){
             return generarNumero(); // recuerda siempre retornar la variable, por que puede que  el programa se pause 
            }else {
               listaNumeroSorteados.push(numeroGenerado);
               
               return numeroGenerado;
            }
      }
            
   }
   

  function intentoDeUsuario(){
    let numeroUsuario = parseInt(document.getElementById('variableUsuario').value);
    console.log(numeroSecreto);
 
    if(numeroUsuario === numeroSecreto){
 asignarTextoElemento('p',`FELICIDADES Acertaste en ${intentos}  ${(intentos === 1)? 'intento' : 'intentos'}`);
    document.getElementById('reiniciar').removeAttribute('disabled');
} else if(numeroUsuario> numeroSecreto){
      asignarTextoElemento('p','el numero secreto es menor al que ingresaste');
    } else{
       asignarTextoElemento('p','el numero secreto es mayor');
    }
    intentos ++;
    limpiar();
    
    return;
   }
   function limpiar(){
   document.querySelector('#variableUsuario').value='';
    
   }
   

   function iniciales(){
    asignarTextoElemento('h1', 'adivina el numero');
    asignarTextoElemento('p',`introduce un numero del 1 al ${numeroMaximo}`);
    
    intentos = 1;
    numeroSecreto= generarNumero();
    
   
   }
   

   function limpiarJuego(){
    //limpiar caja
    limpiar();
    // mostrar mensaje inicial
    //generar numero secreto
    // deshabilitar reiniciar juego
    // contabilizador de intentos en 1
    iniciales();   
    document.querySelector('#reiniciar').setAttribute('disabled','true');
   }
   iniciales();
   

   