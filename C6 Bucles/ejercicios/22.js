function doWhile(num) {
  // Aumenta el valor de "num" recibido en 5 hasta un límite de 8 veces.
  // Retorna el valor final.
  // PISTA: Utiliza el bucle do-while.
  // Tu código:
  let contador = 0; // Inicializamos un contador para controlar las iteraciones
  do {
    num += 5; // Aumentamos el valor de num en 5
    contador++; // Incrementamos el contador
  } while (contador < 8); // Repetimos el bucle mientras el contador sea menor que 8

  return num; // Devolvemos el valor final de num
}

module.exports = doWhile;