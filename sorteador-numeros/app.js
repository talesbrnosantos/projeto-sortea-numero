
function sortear() {
    let quantidadeDeNumero = parseInt(document.getElementById('quantidade').value);
    let numeroDe = parseInt(document.getElementById('de').value);
    let numeroAte = parseInt(document.getElementById('ate').value);


    let sorteados = [];
    let numero;


    for (let i = 0; i < quantidadeDeNumero; i++) {
        numero = numeroAleatorio(numeroDe, numeroAte);

        while(sorteados.includes(numero)){
            numero = numeroAleatorio(numeroDe ,numeroAte);
        }
        sorteados.push(numero);
    };

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados} </label>`;
    
    alteraStatusBotao();

};


function numeroAleatorio(numeroDe, numeroAte) {
    return Math.floor(Math.random() * (numeroAte - numeroDe + 1)) + numeroDe;
};

function alteraStatusBotao(){
    let botao = document.getElementById('btn-reiniciar');
    
    if(botao.classList.contains('container__botao-desabilitado')){
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    }else{
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar(){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>'

    alteraStatusBotao();
}