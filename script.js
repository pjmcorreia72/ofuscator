const pesoInput = document.getElementById("peso");
const alturaInput = document.getElementById("altura");
const resultado = document.getElementById("resultado");
const botao = document.getElementById("calcular");

function calcularIMC(peso, altura){
    return peso / (altura * altura);
}

function obterClassificacao(imc){

    if(imc < 18.5){
        return "Baixo peso";
    }

    if(imc < 25){
        return "Peso normal";
    }

    if(imc < 30){
        return "Excesso de peso";
    }

    return "Obesidade";
}

function mostrarResultado(){

    const peso = Number(pesoInput.value);
    const altura = Number(alturaInput.value);

    if(peso <= 0 || altura <= 0){
        alert("Introduza valores válidos.");
        return;
    }

    const imc = calcularIMC(peso, altura);
    const classificacao = obterClassificacao(imc);

    resultado.innerHTML = `
        <p>IMC: <strong>${imc.toFixed(2)}</strong></p>
        <p>${classificacao}</p>
    `;
}

botao.addEventListener("click", mostrarResultado);