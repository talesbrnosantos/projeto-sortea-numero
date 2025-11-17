function sortear() {
    let quantidadeDeNumero = parseInt(document.getElementById('quantidade').value);
    let numeroDe = parseInt(document.getElementById('de').value);
    let numeroAte = parseInt(document.getElementById('ate').value);

    let sorteados = [];
    let numero;
    

    for( let i = 0; i < quantidadeDeNumero; i++){
        numero = numeroAleatorio(numeroDe,numeroAte);
        sorteados.push(numero);
    };

    alert(sorteados);
};

function numeroAleatorio(numeroDe, numeroAte){
    return Math.floor(Math.random() * (numeroAte  - numeroDe + 1)) + numeroDe;
};