addEventListener(`DOMContentLoaded`, (e)=>{
    
  let suma=0
  let N= Number(prompt("Dame un numero",0)); 
  let D= Number(prompt("Dame un numero",0)); 
  if (N % D == 0) { 
    for(i=1;i=N-1;i++){
        if(N%i==0){
           suma=suma+i   
        }
    }
    if(suma==N)  {
    document.querySelector("body").innerHTML = " es un numero perfecto"
        } else   {
    document.querySelector("body").innerHTML =" no es un numero perfecto"
        }
}
    
    })