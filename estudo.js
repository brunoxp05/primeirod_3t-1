
lfution total(){

    let c = document.getElementById("valor").valor;
    let j = document.getElementById("juros").valor;
    let t = document.getElementById("meses").valor;
    let r = 0;

    for(let i =1; i <= t; i++  ){
      let r = c * (1 +(j/100));
      let v = r;
     }
   document.write("Resultado: " + r);
}







