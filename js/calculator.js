let operacion;
let op1;
let op2;


function init() {
    //variables de todas las teclas
    document.getElementById("uno");
    document.getElementById("dos");
    document.getElementById("tres");
    document.getElementById("cuatro");
    document.getElementById("cinco");
    document.getElementById("seis");
    document.getElementById("siete");
    document.getElementById("ocho");
    document.getElementById("nueve");
    document.getElementById("cero");
    document.getElementById("resultado");
    document.getElementById("reset");
    document.getElementById("suma");
    document.getElementById("resta");
    document.getElementById("multiplicacion");
    document.getElementById("division");
    document.getElementById("igual");
}

//Eventos de click para cada numero
uno.onclick = function () {
    resultado.textContent = resultado.textContent + "1";
}
dos.onclick = function (){
    resultado.textContent = resultado.textContent + "2";
}
tres.onclick = function (){
    resultado.textContent = resultado.textContent + "3";
}
cuatro.onclick = function (){
    resultado.textContent = resultado.textContent + "4";
}
cinco.onclick = function (){
    resultado.textContent = resultado.textContent + "5";
}
seis.onclick = function (){
    resultado.textContent = resultado.textContent + "6";
}
siete.onclick = function (){
    resultado.textContent = resultado.textContent + "7";
}
ocho.onclick = function (){
    resultado.textContent = resultado.textContent + "8";
}
nueve.onclick = function (){
    resultado.textContent = resultado.textContent + "9";
}
cero.onclick = function (){
    resultado.textContent = resultado.textContent + "0";
}

reset.onclick = function (){
    resetear(); //funcion C para volver todo a cero
}
suma.onclick = function (){
    operandoa = resultado.textContent;
    operacion = "+";
}
resta.onclick = function (){
    operandoa = resultado.textContent;
    operacion = "-";
}
multiplicacion.onclick = function (){
    operandoa = resultado.textContent;
    operacion = "*";
}
division.onclick = function (){
    operandoa = resultado.textContent;
    operacion = "/";
}
igual.onclick = function (){
    operandob = resultado.textContent;
    resolver();
}

function resetear() {
    resultado.textContent = "";
    op1 = 0;
    op2 = 0;
    operacion = "";
}

function resolver() {
    let resu = 0;
    switch (operacion) {
        case "+":
            res = parseFloat(op1) + parseFloat(op2);
            break;
        case "-":
            res = parseFloat(op1) - parseFloat(op2);
            break;
        case "*":
            res = parseFloat(op1) * parseFloat(op2);
            break;
        case "/":
            res = parseFloat(op1) / parseFloat(op2);
            break;
    }
    resetear();
    resultado.textContent = resu;
}


