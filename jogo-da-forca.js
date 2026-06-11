let Keyboard = require('readline-sync');

let palavraSorteada = "";
let letrasDaPalavra = []; 
let letrasAcertadas = [];
let erros = 0;
let MaxErros = 6;

function PAlavra() {
    let palavra = Keyboard.question("digite uma palavra para o player 2 acertar: ");
    const quantidadedeletras = palavra.length;
    console.log(quantidadedeletras);
    if (!palavra) {
        console.log("palavra invalida. Jogo encerrado.");
        return;
    }

    palavraSorteada = palavra;
    letrasDaPalavra = []; 
    letrasAcertadas = [];
    erros = 0;

    console.clear();
    console.log("jogo da Forca");

    exibirPalavra();
}

function exibirPalavra() {
    let resultado = "";
    for (let letra of palavraSorteada) {
        if (letra === " ") {
            resultado += "  ";
        } else if (letrasAcertadas.includes(letra)) {
            resultado += letra + " "; 
            resultado += "_ ";
        }
    }
    console.log("\npalavra: " + resultado);
    console.log(`erros: ${erros}/${MaxErros}`);
}

function darPalpite(letraEnviada) {
    if (!palavraSorteada) {
        console.log("use PAlavra() primeiro para iniciar o jogo.");
        return;
    }

    let letra = letraEnviada;

    if (letrasDaPalavra.includes(letra)) {
        console.log("voce ja tentou esta letra");
        return;
    }

    letrasDaPalavra.push(letra);

    if (palavraSorteada.includes(letra)) {
        letrasAcertadas.push(letra);
        console.log("voce acertou a letra");
    } else {
        erros++;
        console.log("voce errou a letra");
    }

    exibirPalavra();

    let palavraCompleta = true;
    for (let l of palavraSorteada) {
        if (l !== " " && !letrasAcertadas.includes(l)) {
            palavraCompleta = false;
            break;
        }
    }

    if (palavraCompleta) {
        console.log("\nparabens voce ganhou o jogo");
        palavraSorteada = ""; 
    } else if (erros >= MaxErros) {
        console.log("\ngame over voce atingiu o limite de erros");
        console.log("a palavra era: " + palavraSorteada);
        palavraSorteada = ""; 
    }
}

PAlavra();

while (palavraSorteada) {
    let palpite = Keyboard.question("\ndigite uma letra para dar palpite: ");
    darPalpite(palpite);
}
