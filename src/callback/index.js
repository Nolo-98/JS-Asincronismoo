function suma(num1, num2) {
    return num1 + num2;
}

function calcular(num1, num2, sumarNumeros) {
    return sumarNumeros(num1,num2);
};

console.log(calcular(2, 2, suma));

setTimeout(function () {
    console.log('Hola javaScript');
}, 5000);

function saludar(nombre){
    console.log(`Hola ${nombre}`)
}

setTimeout(saludar, 2000, 'David');