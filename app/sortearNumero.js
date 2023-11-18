const menor = 1;
const maior = 1000;

const numeroSecreto = gerarNumeroAleatorio(menor, maior);

//entre 1 e 1000

function gerarNumeroAleatorio(menor,maior) {
    return Math.round(Math.random() * maior) + menor;
}

console.log(numeroSecreto);

const elementoMenorValor = document.getElementById('menor-valor');
elementoMenorValor.innerText = menor;

const elementoMaiorValor = document.getElementById('maior-valor');
elementoMaiorValor.innerText = maior;