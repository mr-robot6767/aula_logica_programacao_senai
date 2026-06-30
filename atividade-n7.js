// colocar no codigo uma funcao switch case para o menu, COLOCAR FUNÇÕES
const Keyboard = require("readline-sync");

let cardCompleto = [];
let cardsTitulo = [];
let cardDescricao = [];
let cardTema = [];
let programaRodando = true;

function CriarCards() {
    let continuar = true;
    while (continuar) {
        console.log("\n--- CADASTRANDO NOVO CARD ---");

        let Tema = Keyboard.question("Digite um tema: ")
        cardTema.push(Tema);
        while(Tema === ''){
            console.log("O tema não pode ser vazio!")
            Tema = Keyboard.question("Digite um tema valido: ");
        }

        let Titulo = Keyboard.question("Digite um titulo: ");
        cardsTitulo.push(Titulo);
        while(Titulo === ''){
            console.log("O título não pode ser vazio!")
            Titulo = Keyboard.question("Digite um titulo valido: ");
        }
        
        let Descricao = Keyboard.question("Digite a descricao: ");
        cardDescricao.push(Descricao);

        let cardInteiro = `Título: ${Titulo}\nDescrição: ${Descricao}`;
        cardCompleto.push(cardInteiro);
        console.log("Card adicionado com sucesso!");
        
        let querContinuar = Keyboard.keyInYN("Deseja adicionar outro card? ");
        if (!querContinuar) {
            continuar = false;
        }
    }
}

function VerCards() {
    console.log('\n======== CARDS CADASTRADOS ========');

    for (let i = 0; i < cardsTitulo.length; i++) {
        console.log(`\n[ CARD ${i + 1} ]`); //usando para deixar o array com numero normais
        console.log(`Título    : ${cardsTitulo[i]}`);
        console.log(`Descrição : ${cardDescricao[i]}`);
        console.log('-----------------------------------');
    }
    
    if (cardsTitulo.length === 0) {
        console.log("Nenhum card foi cadastrado.");
    }
}

function EditarDescricao() {
    console.log('\n======== EDITAR DESCRIÇÃO DO CARD ========');
    
    if (cardsTitulo.length === 0) {
        console.log("Não há cards cadastrados para editar.");
        return; 
    }

    let numeroCard = Keyboard.questionInt("Digite o numero do card que deseja editar a nota: ");
    
    let indice = numeroCard - 1;

    if (indice >= 0 && indice < cardsTitulo.length) { //vai validar se o card realmente existe
        console.log(`\nCard selecionado: ${cardsTitulo[indice]}`);
        console.log(`Descrição antiga: ${cardDescricao[indice]}`);
        
       
        let novaDescricao = Keyboard.question("Digite a NOVA descricao: ");
        
        
        cardDescricao[indice] = novaDescricao; //vai atualizar as descriçoes
        
        cardCompleto[indice] = `Título: ${cardsTitulo[indice]}\nDescrição: ${novaDescricao}`;
        
        console.log("\nNota alterada com sucesso!");
    } else {
        console.log("Número de card inválido!");
    }
}

function ExcluirCard() {
    console.log('\n======== EXCLUIR UM CARD ========');
    
    if (cardsTitulo.length === 0) {
        console.log("Não há cards cadastrados para excluir.");
        return; // sai da função caso a lista esteja vazia
    }

    
    let numeroCard = Keyboard.questionInt("Digite o numero do card que deseja excluir: ");
    let indice = numeroCard - 1; // vai transformar em um numero existente

    if (indice >= 0 && indice < cardsTitulo.length) {
        
       
        console.log(`Excluindo o card: "${cardsTitulo[indice]}"...`);

        cardsTitulo.splice(indice, 1);
        cardDescricao.splice(indice, 1);    //vai apagar o selecionado e colocar o da frente no lugar dele
        cardCompleto.splice(indice, 1);

        console.log("Card excluído com sucesso!");
    } else {
        console.log("Número de card inválido!");
    }
}

function FiltrarTema(){
    console.log('======== FILTRAR TITULOS ======== ')
    let pesquisa = Keyboard.question('Escolha qual tema deseja buscar: ')
    let encontrados = 0;

    let i = 0
    
    console.log("\nResultado da busca:");
    
     
    for (let tema of cardTema) {
        if (tema.includes(pesquisa)) {
            console.log(`\nTema      : ${tema}`);
            console.log(`Título    : ${cardsTitulo[i]}`);
            console.log(`Descrição : ${cardDescricao[i]}`);
            console.log('-----------------------------------');
            encontrados++;
        }
        i++; // soma 1 a cada volta para acompanhar as outras listas
    }

    if (encontrados === 0) {
        console.log("Nenhum card foi encontrado com esse tema.");
    }
}

function MenuPrincipal() {
    while (programaRodando) {
        console.log("\n=================================");
        console.log("        SISTEMA DE CARDS         ");
        console.log("=================================");
        console.log("1. Cadastrar novos cards");
        console.log("2. Visualizar todos os cards");
        console.log("3. Editar apenas a nota de um card");
        console.log("4. Excluir um card");
        console.log("5. Buscar pelo tema")
        console.log("0. Sair do programa");
        console.log("=================================");
        
        let opcao = Keyboard.question("Escolha uma opcao: ");

        if (opcao === "1") {
            CriarCards();
        } else if (opcao === "2") {
            VerCards();
        } else if (opcao === "3") {
            EditarDescricao();
        } else if (opcao === "4") {
            ExcluirCard();
        }else if (opcao === "5") {
            FiltrarTema();
        } else if (opcao === "0") {
            programaRodando = false; 
            console.log("Obrigado por usar o sistema! Saindo...");
        } else {
            console.log("Opção inválida! Tente novamente.");
        }
    }
}
MenuPrincipal()

