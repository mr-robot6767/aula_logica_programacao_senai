const num1 = 121;
const num2 = 123;
const num3 = 11211;

let lista = [num1, num2, num3]

for (let i = 0; i < lista.length; i++) {
    let numeroOriginal = lista[i];
    let numero = numeroOriginal;
    let invertido = 0;

while (numero > 0) {
    let digito = numero % 10;
    invertido = (invertido * 10) + digito;
    numero = Math.floor(numero / 10)
}
if (numeroOriginal === invertido) {
    console.log(true)
} else {
    console.log(false)
    }
}