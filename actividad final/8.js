let operaciones= prompt("ingresa la operacion:suma,resta,multiplicar,dividir");
let num1= prompt("ingresa el primer numero");
let num2= prompt("ingresa el segundo numero");
if (operaciones =="suma"){
    console.log("el resultado es; +(num1 +num2)");
} else if (operaciones =="resta"){
    console.log("el resultado es; +(num1-num2)");
} else if (operaciones == "multiplicar"){
    console.log("el resultado es; +(num1*num2)");
} else if (operaciones == "dividir"){
    console.log("el resultado es; +(num1/num2)");
} else {
    console.log("operacion no valida");
} 