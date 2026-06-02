let Keyboard = require('readline-sync');
console.log('\n     -JOGO DA VELHA- ');
console.log('     0     1      2')
let tabuleiro =
 [
    ['-','-','-'],
    ['-','-','-'],
    ['-','-','-'],
]
console.table(tabuleiro);

let jogadas = 0;


while(jogadas < 9){
    let  jogador = ''
    if(jogadas % 2 === 0){
    jogador = 'X'
    } else {
        jogador = 'O'
    }
console.log(`vez do jogador ${jogador}`);
let linha = Keyboard.questionInt('escolha uma linha (0,1,2): ')
let coluna = Keyboard.questionInt('escolha uma coluna (0,1,2): ')

if(linha < 0 || linha >= 3 || coluna < 0 || coluna >= 3){
    console.log('numero invalido, continuando')
    continue;
}

if (tabuleiro[linha][coluna] != '-' ){
    console.log('posição ja ocupada')
} else {
    tabuleiro[linha][coluna] = jogador
    jogadas ++
    console.table(tabuleiro);
    }
    
}
if(jogadas === 9){
    console.log('DEU VELHA!')
}