let valorAtual = "";
let valorAntigo = "";
let operacao = "";

function coletar0(){
    valorAtual = valorAtual + document.getElementById('tNumber0').value;
    document.getElementById('valorAtual').innerHTML = valorAtual;
}

function coletar1(){
    valorAtual = valorAtual + document.getElementById('tNumber1').value;
    document.getElementById('valorAtual').innerHTML = valorAtual;
}

function coletar2(){
    valorAtual = valorAtual + document.getElementById('tNumber2').value;
    document.getElementById('valorAtual').innerHTML = valorAtual;
}

function coletar3(){
    valorAtual = valorAtual + document.getElementById('tNumber3').value;
    document.getElementById('valorAtual').innerHTML = valorAtual;
}

function coletar4(){
    valorAtual = valorAtual + document.getElementById('tNumber4').value;
    document.getElementById('valorAtual').innerHTML = valorAtual;
}

function coletar5(){
    valorAtual = valorAtual + document.getElementById('tNumber5').value;
    document.getElementById('valorAtual').innerHTML = valorAtual;
}

function coletar6(){
    valorAtual = valorAtual + document.getElementById('tNumber6').value;
    document.getElementById('valorAtual').innerHTML = valorAtual;
}

function coletar7(){
    valorAtual = valorAtual + document.getElementById('tNumber7').value;
    document.getElementById('valorAtual').innerHTML = valorAtual;
}

function coletar8(){
    valorAtual = valorAtual + document.getElementById('tNumber8').value;
    document.getElementById('valorAtual').innerHTML = valorAtual;
}

function coletar9(){
    valorAtual = valorAtual + document.getElementById('tNumber9').value;
    document.getElementById('valorAtual').innerHTML = valorAtual;
}

function somar(){
    valorAntigo = parseFloat(valorAtual) 
    document.getElementById('valorAntigo').innerHTML = valorAntigo;
    valorAtual = "";
    document.getElementById('valorAtual').innerHTML = valorAtual;
    operacao = "+";
    document.getElementById('labelOp').innerHTML = operacao;
}

function subtrair(){
    number1 = parseFloat(document.getElementById('tNumber1').value)
    number2 = parseFloat(document.getElementById('tNumber2').value)

    resultado = number1 - number2

    document.getElementById('tResultado').innerHTML = resultado;
}

function multiplicar(){
    number1 = parseFloat(document.getElementById('tNumber1').value)
    number2 = parseFloat(document.getElementById('tNumber2').value)

    resultado = number1 * number2

    document.getElementById('tResultado').innerHTML = resultado;
}

function dividir(){
    number1 = parseFloat(document.getElementById('tNumber1').value)
    number2 = parseFloat(document.getElementById('tNumber2').value)

    resultado = number1 / number2

    document.getElementById('tResultado').innerHTML = resultado;
}

function result(){
    valorAntigo = "";
    valorAntigo = document.getElementById('valorAntigo').innerHTML = valorAntigo;
    operacao = "";
    document.getElementById('labelOp').innerHTML = operacao;
    document.getElementById('valorAtual').innerHTML = valorAtual;

    valorAtual = parseFloat(valorAntigo) + parseFloat(valorAtual);
}

function clear(){
    valorAtual = "";
    document.getElementById('valorAtual').innerHTML = valorAtual;
    valorAntigo = "";
    document.getElementById('valorAntigo').innerHTML = valorAntigo;
    operacao = "";
    document.getElementById('labelOp').innerHTML = operacao;
}