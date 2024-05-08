function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:
var numero= num.toString()
if (numero.length === 3){
  return true
}else return false
}

module.exports = tieneTresDigitos;

