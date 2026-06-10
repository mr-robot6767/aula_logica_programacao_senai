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

if(cassino(saldo) = true){roletafalsa()}
