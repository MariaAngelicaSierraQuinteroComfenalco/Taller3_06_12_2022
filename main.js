addEventListener(`DOMContentLoaded`, (e)=>{
    
    //Realizar un programa que pueda sumar dos números leídos por teclado y escribir el resultado
    let num1 = Number(prompt("dame un numero",0));
    let num2 = Number(prompt("Dame un numero",0)); 
    
    let suma=num1+num2
    
    document.querySelector("body").innerHTML = "la suma de  los dos numeros es :  "+suma
    })