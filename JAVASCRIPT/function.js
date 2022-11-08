function somar(){
    number1 = parseFloat(document.getElementById('tNumber1').value)
    number2 = parseFloat(document.getElementById('tNumber2').value)

    resultado = number1 + number2

    document.getElementById('tResultado').innerHTML = resultado;
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