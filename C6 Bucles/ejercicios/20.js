function sumarHastaNConBreak(n) {
   // La función recibe un numero n por argumento.
   // Devuelve la suma de todos los números desde 1 hasta n.
   // Si la suma supera a 100, detén el bucle usando break.
   // Tu código:
   
   suma = 1
   for(var i = 0; i <= n;i++){
      suma += i
      
      if (n > 100){
         break;
      }
   
   }
   return suma
}

module.exports = sumarHastaNConBreak;


