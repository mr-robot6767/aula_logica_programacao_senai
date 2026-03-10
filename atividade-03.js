// ============================================================
//   ATIVIDADE 03 – Input e Output em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Lembre-se de instalar o pacote antes de executar:
//     npm install readline-sync
// Lembre-se de criar uma variável para utilizar o readline-sync
//     let lerTeclado = require('readline-sync');
// Para executar:
//     node <nomeDoArquivo>.js
//
// Dica: Ao terminar um exercício, comente-o. Assim os dados não serão solicitados novamente.
// ============================================================

let Keyboard = require('readline-sync');

// ------------------------------------------------------------
// EXERCÍCIO 1 – Explorando os métodos do console
// ------------------------------------------------------------
// a) Use console.log() para exibir a mensagem: "Iniciando o programa..."
// b) Use console.info() para exibir uma mensagem informando sobre o que é a atividade atual.
// c) Use console.warn() para exibir um aviso de que o usuário sempre precisa iniciar o programa com node e o nome do arquivo.
// d) Use console.error() para exibir uma mensagem de erro aleatória de sua escolha.

// → Seu código aqui:

// console.log('iniciando o progama...')
// console.info('atividade sobre input e output')
// console.warn('necessario inciar o programa com node e o nome da pasta')
// console.error('404 page not found')

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Saudação personalizada
// ------------------------------------------------------------
// a) Peça ao usuário que digite seu nome usando question().
// b) Peça ao usuário que digite sua idade usando questionInt().
// c) Exiba no console uma saudação usando template literal, no formato:
//    "Olá, <nome>! Você tem <idade> anos."

// → Seu código aqui:
// const nomeUsuario = Keyboard.question('Digite seu nome: ');
// const idade = Keyboard.questionInt('Digite sua idade: ');
// console.log(`Olá, ${nomeUsuario}! Você tem  ${idade} anos.`);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Ficha pessoal
// ------------------------------------------------------------
// a) Peça ao usuário os seguintes dados: nome, idade e cidade.
// b) Crie um objeto chamado "ficha" com as propriedades: nome, idade e cidade.
// c) Exiba o objeto com console.table().

// → Seu código aqui:
// const nomeUsuario =Keyboard.question('Digite seu nome: ');
// const idadeUsuario = Keyboard.questionInt('Digite sua idade: ');
// const cidadeUsuario = Keyboard.question('Digite sua cidade: ');
// const ficha = { nome: nomeUsuario, idade: idadeUsuario, cidade: cidadeUsuario };
// console.table([ficha])

// console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Perguntas de sim ou não
// ------------------------------------------------------------
// a) Faça duas perguntas de sim/não ao usuário usando keyInYN().
// b) Armazene as respostas em variáveis.
// c) Exiba as respostas no console usando template literal.

// → Seu código aqui:


console.log("_______________________________");

// const JogarBrawl = Keyboard.keyInYN('Vamo jogar Brawl stars hj? ');
// console.log(`entao ${JogarBrawl ? 'bora push de trofeu' : 'voce e beta'}.`);

// ------------------------------------------------------------
// EXERCÍCIO 5 – Lista de favoritos
// ------------------------------------------------------------
// a) Peça ao usuário que informe 3 comidas favoritas, uma por vez.
// b) Armazene as 3 respostas em uma array chamada "comidasFavoritas".
// c) Exiba a array com console.table().

// → Seu código aqui:
// console.log(`Qual sua comida favorita?`);

// let Comidas1 =Keyboard.question('numero 1?: ');
// let Comidas2 =Keyboard.question('numero 2?: ');
// let Comidas3 =Keyboard.question('numero 3?: ');

// comidasFavoritas=[Comidas1, Comidas2, Comidas3]
// const comiditas = {comida1: Comidas1, comida2: Comidas2, comida3:Comidas3};
// console.table([comiditas])
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 6 – Apresentação completa
// ------------------------------------------------------------
// a) Peça ao usuário: nome, profissão e cidade.
// b) Armazene estes dados em um objeto 'cadastroPessoal'
// c) Exiba no console uma frase completa com os dados, usando template literal:
//    "Me chamo <nome>. Profissão: <profissão> e moro na cidade de: <cidade>."
// d) Exiba a mesma informação com console.table().

// → Seu código aqui:

// const nomeUsuario = Keyboard.question('Digite seu nome: ');
// const nomeTrabalho = Keyboard.question('Digite sua profissao: ');
// const nomeCidade = Keyboard.question('Digite sua cidade: ');
// cadastroPessoal ={nomeUsuario, nomeTrabalho, nomeCidade}

// console.log(`Me chamo ${nomeUsuario}. Profissão: ${nomeTrabalho} e moro na cidade de:${nomeCidade}.`)

// console.table([cadastroPessoal])

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 7 – Lista de objetos
// ------------------------------------------------------------
// a) Através do terminal, capture o dado de 3 usuários fictícios, cada um com as seguintes propriedades:
//    nome(string), idade(number) e endereço(objeto).
//    objeto endereço deve conter as propriedades: cidade(string), rua(string) e numero(number)
// b) Armazene cada usuário em um objeto.
// c) Armazee os objetos em um array 'listaDeUsuarios'
// d) Exiba o array com console.table().
// e) Exiba somente o nome e a idade do 2º usuário.
// f) Exiba somente o endereço completo do 3º usuário.
// g) Exiba somente o nome e a rua do 1º usuário.

// → Seu código aqui:
// const user1 = {
//     nome: "estevan",
//     idade: 99,
//     endereco: {
//         cidade: "belford roxo",
//         pais: "Brasil",
//         rua: "piam",
//         cep: 102013
//     }
// }; 

// const user2 = {
//     nome: "dominique",
//     idade: 77,
//     endereco: {
//         cidade: "belford roxo",
//         pais: "Brasil",
//         rua: "andrade araujo",
//         cep: 102015
//     }
// };

// const user3 = {
//     nome: "estevan jr",
//     idade: 55,
//     endereco: {
//         cidade: "belford roxo",
//         pais: "Brasil",
//         rua: "andrade araujo",
//         cep: 102013
//     }
// };

// const listaDeUsuarios = [user1, user2, user3];
// console.table(listaDeUsuarios);

// console.log(`Nome: ${listaDeUsuarios[1].nome}, Idade: ${listaDeUsuarios[1].idade}`);
// console.log("Endereço do 3º usuário:", listaDeUsuarios[2].endereco);
// console.log(`Nome: ${listaDeUsuarios[0].nome}, Rua: ${listaDeUsuarios[0].endereco.rua}`);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 8 – Ranking de notas
// ------------------------------------------------------------
// a) Peça ao usuário o nome de 3 alunos e suas três notas, um por vez.
// b) Armazene cada aluno como um objeto com as propriedades 'nome' e 'notas'.
// c) Guarde os 3 objetos em um array chamado 'turma'.
// d) Exiba o array 'turma' com console.table().
// e) Exiba o nome e a 1ª nota do 2º aluno.
// f) Exiba o nome e a 2ª nota do 3º aluno.
// g) Exiba o nome e a 3ª nota do 1º aluno.

// → Seu código aqui:

const nomeUsuario1 = Keyboard.question('Digite o nome do aluno: ');
const nota1 = (Keyboard.question('Nota 1: '));
const not2 = (Keyboard.question('Nota 2: '));
const nota3 = (Keyboard.question('Nota 3: '));
const aluno1 = { nome: nome1, notas: [nota1, nota2, nota3] };



console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 9 – Cadastro de produto
// ------------------------------------------------------------
// a) Peça ao usuário os seguintes dados de um produto:
//    - nome (string)
//    - categoria (string)
//    - preço (float)
//    - quantidade em estoque (inteiro)
//    - está disponível para venda? (sim/não, usando keyInYN())
// b) Crie um objeto 'produto' com todas essas propriedades.
//    A propriedade de disponibilidade deve se chamar 'disponivel' e ser boolean (true/false).
// c) Exiba o objeto completo com console.table().
// d) Exiba no console uma frase resumo usando template literal:
//    "Produto: <nome> | Categoria: <categoria> | Estoque: <quantidade> un".

// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 10 – Farmacia
// ------------------------------------------------------------
// a) Peça ao usuário os seguintes dados de dois medicamento com as seguintes propriedades:
//    - nome (string)
//    - preco (float)
//    - emEstoque (boolean) - (sim/não, usando keyInYN())
// b) Crie uma lista "estoqueFarmacia" e insira os objetos criados com push().
// c) Exiba a lista com console.table().
// d) Exiba somente o nome e preço do 2 medicamento.
// e) Exiba somente o nome e se está em estoque o 1 medicamento.