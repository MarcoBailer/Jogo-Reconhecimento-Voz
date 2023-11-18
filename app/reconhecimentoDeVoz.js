const elementoChute = document.getElementById('chute');


window.SpeechRecognition = window.SpeechRecognition || 
window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-BR';

recognition.start();

recognition.addEventListener('result', e => {
    chute =
     resultado = e.results[0][0].transcript;

     exibindoChute(chute);
     verificaChute(chute);
});

function exibindoChute(chute) {
    elementoChute.innerHTML = `<div> Voce disse: </div> 
    <span class="box"> ${chute} </span> 
    `;
}

recognition.addEventListener('end', recognition.start);