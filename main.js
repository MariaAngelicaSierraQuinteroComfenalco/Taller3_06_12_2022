addEventListener(`DOMContentLoaded`, (e)=>{
    
    //Realizar un programa de procesos en el que se almacenen 3 números en 3 variables A, B y C. 
    //El diagrama debe decidir cual es el mayor y cual es el menor
    let A = Number(prompt("dame un nuemro",0));
    let B = Number(prompt("Dame un numero",0)); 
    let C = Number(prompt("Dame un numero",0)); 
    let menor=0;
    let mayor=0;
        if(A<=B && A<=C){
            menor=A
        }else if(B<=A && B<=C){
            menor=B
        }else{
             menor=C
        }
    
        if(A>=B && A>=C){
             mayor=A
        }else if(B>=A && B>=C){
               mayor=B
        }else{
             mayor=C
        }
    document.querySelector("body").innerHTML = "el numero mayor es: "+mayor+ "  el numero menor es: "+menor
    
    })