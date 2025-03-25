//Teste1--------------------------------------------------------
function acheSoma () {
    const INDICE = 13;
    let K = 0;
    let SOMA = 0;

    for (K = 0; K < INDICE; K ++) {
        SOMA = SOMA + (K + 1)
    }

    document.getElementById("resultado").textContent = SOMA;
}

//Teste 2-------------------------------------------------------
function fibonacci (x) {
    let dataBase=[0,1];
    
    for(i = 2; i< x; i++ ){
        let proximo = dataBase[i-1] + dataBase[i-2]
        dataBase.push(proximo)
    }

    if (dataBase.includes(x)) {
        document.getElementById("teste2Resultado").textContent = `O numero,${x} esta na sequencia de Fibonacci`
    } else {
        document.getElementById("teste2Resultado").textContent = `O numero,${x} nao esta na sequencia de Fibonacci`
    }
}

//Teste 3--------------------------------------------------------
function vetor () {
    fetch('faturamento.json')
    .then(response => response.json())
    .then (faturamento => {

        let maior = faturamento[0].valor;
        let menor = faturamento[0].valor;
        let faturamentoTotal = 0;
        let maiorMedia = [];
        let diasComFaturamento = 0;

        for (i = 1; i < faturamento.length; i ++) {
            if (maior < faturamento[i].valor) {
                maior = faturamento[i].valor
            }
            if (menor > faturamento[i].valor) {
                menor = faturamento[i].valor
            }
        }

        for (i = 1; i < faturamento.length; i ++) {
            if (faturamento[i].valor !== 0){
            faturamentoTotal += faturamento[i].valor;
            diasComFaturamento++
            }
        }

        const mediaFaturamento = faturamentoTotal / diasComFaturamento;

        for (i = 0; i < faturamento.length; i ++) {
            if (faturamento[i].valor > mediaFaturamento){
                maiorMedia.push(faturamento[i])
            }
        }

        const maioresQueMedia = maiorMedia.map(item => item.valor); 

        document.getElementById("teste3Maior").textContent = `${maior} maior faturamento do mes.`
        document.getElementById("teste3Menor").textContent = `${menor} menor faturamento do mes.`
        document.getElementById("teste3Media").textContent = `Valores maiores que a média: ${maioresQueMedia.join(', ')}`
    })   
}

//Teste 4---------------------------------------------------
function distribuidora () {
    fetch('faturamento2.json')
    .then(response => response.json())
    .then (faturamento2 => {

        let faturamentoTotal = 0;
        let resultados = [];

        for (i = 0; i < faturamento2.length; i ++) {
            let valor = (faturamento2[i].valor);
            faturamentoTotal += valor;
        }

        for (i = 0; i < faturamento2.length; i ++) {
            let porcentagem = (100*faturamento2[i].valor) / faturamentoTotal;
            resultados.push({
                estado: faturamento2[i].estado,
                porcentagem: porcentagem.toFixed(2)
            })
        }

        let porcentagensTexto = resultados.map(item => `${item.estado}: ${item.porcentagem}%`).join(', ');

        document.getElementById("teste4Resultados").textContent = `Porcentagem de cada estado: ${porcentagensTexto}`;

    })
}

//Teste5--------------------------------------------------------

function reverso (str) {
    let StrReversa = "";

    for (let i = str.length - 1; i>=0; i--) {
        StrReversa += str[i];
    }

    document.getElementById("teste5Resultado").textContent = `A string reversa: ${StrReversa}`
}

//Chamando funcoes----------------------------------------------
acheSoma ()
fibonacci(55)
vetor()
distribuidora()
reverso("palavra")