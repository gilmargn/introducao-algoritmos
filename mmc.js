function mdc(number1,number2) {
    number1 = Math.abs(number1);
    number2 = Math.abs(number2);
    if (number2 > number1) {
        var temp = number1;
        number1 = number2;
        number2 = temp;
    }
    while (true) {
        if (number2 == 0)
            return number1;
        number1 %= number2;
        if (number1 == 0)
            return number2;
        number2 %= number1;
    }
}
let number1 = prompt("Digite um número ");
let number2 = prompt("digite um número");
alert("MDC entre " + number1 + " e " + number2 + " =  " + mdc(number1,number2));
let gcf = mdc(number1,number2);
let numerador = number1/gcf;
let denominador = number2/gcf;
alert(numerador + "/ " + denominador);