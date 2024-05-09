function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:

  if (a > b) {
    // Intercambiamos los valores si a es mayor que b
    [a, b] = [b, a];
  }
  producto = 1

  let producto = 1;
  for (let i = a; i <= b; i++) {
    producto *= i;
  }
  return producto

}

module.exports = productoEntreNúmeros;