function esNumeroPrimo(numero) {
  // La función recibe un argumento "numero".
  // Determina si este corresponde a un número primo.
  // De ser así, retorna true.
  // De lo contrario, retorna false.
  // IMPORTANTE: Recuerda que un número primo es aquel que
  // solo es divisible por sí mismo y por 1.
  // Tu código:

  if (numero <= 1) {
    return false; // Los números no positivos ni el 1 no son primos
  }

  // Comprobamos si el número es divisible por algún número menor que él mismo
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      return false; // Si es divisible, no es primo
    }
  }

  // Si no ha sido divisible por ningún número, es primo
  return true;
}

module.exports = esNumeroPrimo;
