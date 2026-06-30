/*
let saldo = 0
function ReceberPix(pix){
 saldo =+ pix;
 return(console.log(`recebimento do pix no valor de ${pix}`))
}

function cassino(saldo){
  if(saldo <= 50){
    return"so pode sacar acima de 600"
  } else {return 'extraindo...'}
}
ReceberPix(100)
console.log(cassino(saldo))

function roletafalsa(){
  let configuracaoRoleta = [
    { premio: "ganhou", peso: 10 },
    { premio: "perdeu", peso: 90 }   
  ];
  Math.max(configuracaoRoleta[i].premio)
}

let contas = [];

function conta(){
    const CriarConta = [
        { nome: Keyboard.question("Digite seu nome:") },
        { senha: Keyboard.question("Digite sua senha:")  },
      ];
      console.log(CriarConta)
}
conta()
*/
const Keyboard = require("readline-sync");
function criarSenha(){
let criar  = Keyboard.questionInt("Crie sua senha: ")
  senha.push(criar)
}
let senha = []
function senhaDoCelular(){
  let senhaDigitada = Keyboard.questionInt("Digite sua senha: ")
  if(senhaDigitada === senha[0] || senhaDigitada === senha[1] ){ 
    console.log('entrou')
  } else{
    console.log('tente novamente')
  }
}
criarSenha()
senhaDoCelular()

