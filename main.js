addEventListener(`DOMContentLoaded`, (e)=>{
    
    let suma = 0;
    let mul = 1; 
    let num= Number(prompt("cuantos numeros ingresaras",0)); 
    for (i=0; i < num; i++) {
        let n= Number(prompt("Dame un numero",0)); 
        if (n % 2 == 0) {
            suma=suma+n;
            
        }else   {
            mul=mul*n;
        }
    
    }

    console.log("la suma de los pares es: "+suma);
    console.log("la multiplicacion de los impares es: "+mul);
    })