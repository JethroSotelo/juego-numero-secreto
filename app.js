let numeroSecreto =0;
let intentos = 0;
let listanumerosSorteados = [ ];
let numeroMaximo = 10;
console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto )
{
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML =texto;
    return;
}

function VerificarIntento()
{
    let numerodeUsuario = document.getElementById('valorUsuario').value;

      
        asignarTextoElemento('p','acertaste el numero');
        
        if(numerodeUsuario === numeroSecreto)
        {
            asignarTextoElemento('p',`acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        }
        else
        {
            if(numerodeUsuario > numeroSecreto)
            {
                asignarTextoElemento('p','El numero es menor');

            }
            else
                {
                    asignarTextoElemento('p','el numero es mayor');
                }

                intentos++;
        }
    
       
    return;
}

function limpiarCaja()
{
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() 
{
    let numeroGenerado = math.floor(math.random ()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listanumerosSorteados);
    //si el numero geenrado esta incluido en la lista 
    if(listanumerosSorteados.length == numeroMaximo)
    {
        asignarTextoElemento('p','ya se sortearon todos los numeros posibles');
        return generarNumeroSecreto();
    }
    else
    {
       if (listanumerosSorteados.includes(numeroGenerado))
        {
            return generarNumeroSecreto();
        }
        
    
    else
    {
        listanumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}
{
    return  math.floor (math.random()*10)+1;
   
}
function condicionesIniciales()
{
    asignarTextoElemento('h1','Juego del numero secreto!');
    asignarTextoElemento('p','Indica un numero del 1 al 10');
    numeroSecreto = generarNumeroSecreto();
    //inicializar el numero de intentos
    intentos = 1;
}
function reiniciarJuego() 
{
 //limpiar caja
 limpiarCaja();
 //indicar mensajes de intervalos de numeros
 condicionesIniciales();
 //deshabilitar el boton de nuevo juego
 document.querySelector('#reiniciar').setAttribute('disabled','true');

    
}

}