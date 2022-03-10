const numeroSecreto = parseInt(Math.random() * 11);
const numeroTentativas = 0;
console.log('NUMERO_SECRETO', numeroSecreto);
console.log('NUMERO_TENTATIVAS', numeroTentativas);

function chutar() {
  const numeroInserido = parseInt(document.getElementById('valor').value)
  const elementoResultado = document.getElementById('resultado');

  if (numeroInserido === numeroSecreto) {
    elementoResultado.innerHTML = '👍'
  } else if (numeroInserido > 10 || numeroInserido < 0) {
    elementoResultado.innerHTML = 'você deve inserir um número de 0 a 10';
  } else {
    elementoResultado.innerHTML = '👎';
  }
}