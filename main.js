addEventListener(`DOMContentLoaded`, (e)=>{
    
    //Realice un programa que calcule el máximo de N números leídos desde teclado.
    let c_numeros = Number(prompt("Cantidad de numeros a leer",0));
    let numero_mayor=0
    
    for (let i = 0; i < c_numeros; i++) {
        let num = Number(prompt("Dame un numero",0)); 
        if(i==1){
            numero_mayor=num
        } else if(num > numero_mayor){
            numero_mayor=num
        
        }
    }
    document.querySelector("body").innerHTML = "el numero mayor es: "+numero_mayor
    })