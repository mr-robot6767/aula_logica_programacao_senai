//Criar Banco;
//Segurança do Banco;
//menu inicial 
//Taxa:
//Saque:
//Investimento:
//C.C:
//Tranferencia: Pix, Ted, Doc;
//LCP.:
//Emprestimo: add Historico, Atualiza Conta no caso o valor;
//Renda fixa, Renda variavel;
//extrato: o que, quanto, ano/mes/dia/hora/minuto/segundo
//sistema de ajuda;
//cashback;
//Recarga de Celular;
//Seguraça de validação;

//Ter Notificação;
//Abrir Caixinha;
//Notificação: Ex: Cartao Vencido, Valor en Extrato, Novo Limite, Deposito, Saque;

//Cadastro: Com Senha;
//historico
//limite
//tipo
//investimento
//info pessoal
//saldo
//bonus
//logado = boolean
//Excluir Cadastro

const Keyboard = require('readline-sync');

// let saldo = 0
// function deposito(){
//   console.log(`seu saldo é de ${saldo}`)
//   Keyboard.keyInYN('deseja fazer um deposito ou transferencia? :')
// }
// deposito()


let contas = []; //  lista de usuários/contas

function criarCadastroBase(){
    return {
        nomeCompleto: null,
        telefone: null,
        cpf: null,
        cnpj: null,
        enderecoCompleto: { 
            cep: null,
            estado: null,
            cidade: null,
            bairro: null,
            rua: null,
            numero: null
        }
    };
}

function conta(){
    const pergunta = Keyboard.keyInYN('deseja criar uma conta? (Pressione N se ja tiver login): ');

    if(pergunta === true){
        const novoUsuario = criarCadastroBase();
        
        novoUsuario.nomeCompleto = Keyboard.question("digite seu nome completo: ");
        novoUsuario.telefone = Keyboard.question("digite seu telefone: ");
        novoUsuario.cpf = Keyboard.questionInt("digite seu CPF: ");
        
        console.log("\n--- agora vamos preencher o endereco ---");
        novoUsuario.enderecoCompleto.cep = Keyboard.question("digite o CEP: ");
        novoUsuario.enderecoCompleto.cidade = Keyboard.question("digite a cidade: ");
        novoUsuario.enderecoCompleto.numero = Keyboard.question("digite o numero da casa: ");

        contas.push(novoUsuario);
        
        console.log("conta criada com sucesso!");
        console.log(contas);
    } else {
        console.log("encaminhando para a tela de login...");
    }
}

conta();
