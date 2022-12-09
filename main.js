addEventListener(`DOMContentLoaded`, (e)=>{
    
    //Realizar un programa que permita leer 2 números diferentes y nos diga cual es el mayor de los 2 números.
    let num1 = Number(prompt("Dame un numero",0));
    let num2 = Number(prompt("Dame un numero diferente",0));
    
         if (num1 > num2) { 
            document.querySelector("body").innerHTML = "El numero mayor es "+num1
         } else { 
            document.querySelector("body").innerHTML = "El numero mayor es "+num2
         }
    
    
    })