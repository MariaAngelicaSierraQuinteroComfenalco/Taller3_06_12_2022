addEventListener(`DOMContentLoaded`, (e)=>{
    
  let suma=0
  let N= Number(prompt("Dame un numero",0)); 
  for(let i=1;i<N; i++){
     if(N%i==0){
        suma=suma+i   
        }
    }
    if(suma==N)  {
    document.querySelector("body").innerHTML = " es un numero perfecto"
        } else   {
    document.querySelector("body").innerHTML =" no es un numero perfecto"
        }

    
    })