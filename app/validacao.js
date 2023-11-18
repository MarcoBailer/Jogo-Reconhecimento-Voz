function verificaChute(chute){
    const numero = +chute;

    if(NaoENumero(numero)){
        elementoChute.innerHTML = `<div> Isso não é um numero </div>
        <span class="box">${chute} </span>        
        `;
    }
    if(numeroMaiorOuMenorQueOValorPermitido(numero)){
        elementoChute.innerHTML = `<div> O numero deve estar entre ${menor} e ${maior} </div>
        <span class="box">${chute} </span>`;
    }
    if(numero === numeroSecreto){
        document.body.innerHTML = `<h2> Parabens, voce acertou o numero secreto ${numeroSecreto} </h2>
        
        <button id="jogar-novamente" class="btn-jogar"> Jogar Novamente </button>

        `;
    }else if(numero > numeroSecreto){
        elementoChute.innerHTML = `<div> O numero secreto é menor </div>
        <span class="box">${chute} </span>`;
    }else if(numero < numeroSecreto){
        elementoChute.innerHTML = `<div> O numero secreto é maior </div>
        <span class="box">${chute} </span>`;
    }

}

function NaoENumero(numero){
    return Number.isNaN(numero);
}

function numeroMaiorOuMenorQueOValorPermitido(numero){
    return numero > maior || numero < menor;
}

document.body.addEventListener('click', function(event){
    const elemento = event.target;
    if(elemento.id === 'jogar-novamente'){
        window.location.reload();
    }
});