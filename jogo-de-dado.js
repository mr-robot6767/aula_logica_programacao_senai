let Keyboard = require('readline-sync')
let chalk = require('chalk')

function historia(){
  
    nome = Keyboard.question(chalk.bold.blue("Digite o nome do seu personagem: "))
    hp = 100
    
    linha()
    caveiraBizonha()
    linha()



    console.log(chalk.red.bold(`Em um inferno distante, tomado pelo caos e ódio, nasce ${nome}: uma pequena metaleira cujo único propósito é matar e destruir todo tipo de demônio maligno.\n`))
    
    console.log(chalk.yellow(`${nome} acorda banhada de sangue. Ela não sabe onde está e o que aconteceu, mas conhece seu nome e seu propósito neste mundo amaldiçoado por Baal.\n\nCom duas trilhas em sua frente, ${nome} precisa escolher seu caminho:\n`))
    
   
    console.log(chalk.yellow.bold(`[1]`) + chalk.white(` Seguir pela trilha dos ossos e esqueletos metaleiros com jaquetas de couro e cabelo spike.`))
    console.log(chalk.yellow.bold(`[2]`) + chalk.white(` Seguir pela trilha das zumbis com sua pele derretida e órgãos à mostra.\n`))
        let opcao;
    do { 
        opcao = Keyboard.questionInt("Escolha a opcao (1 ou 2): ");

        switch (opcao) {
            case 1:
                trilhaEsqueletos(); 
                break;
            case 2:
                trilhaZumbis(); 
                break;
            default:
                console.log(chalk.red("Opcao invalida. Tente novamente.\n"));
        }
    } while (opcao !== 1 && opcao !== 2); 
}

function trilhaEsqueletos() {
    console.log(chalk.cyan("\nUma horda de esqueletos a rodeia com curiosidade. O líder deles estende a mão e oferece uma guitarra feita de ossos.\n"));
    console.log(chalk.yellow.bold(`[1]`) + chalk.white(` Aceitar a guitarra e tocar um solo brutal`));
    console.log(chalk.yellow.bold(`[2]`) + chalk.white(` Recusar e atacar o líder dos esqueletos\n`));

    let subOpcao;
    do {
        subOpcao = Keyboard.questionInt("O que voce faz? ");
        if (subOpcao === 1) {
            console.log(chalk.green("\nVoce toca um solo tão pesado que as cabeças dos esqueletos explodem de admiração! Voce venceu!"));
        } else if (subOpcao === 2) {
            hp -= 8;
            console.log(chalk.red(`\nOs esqueletos atacam em bando! Voce foge, mas perdeu 8 de HP. HP Atual: ${hp}`));
        } else {
            console.log(chalk.red("Opcao invalida."));
        }
    } while (subOpcao !== 1 && subOpcao !== 2);
}

function trilhaZumbis() {
    console.log(chalk.magenta("\nUm zumbi corre em sua direção babando sangue!\n"));
    console.log(chalk.yellow.bold(`[1]`) + chalk.white(` Dar uma voadora no peito do zumbi.`));
    console.log(chalk.yellow.bold(`[2]`) + chalk.white(` Amassar a cabeça do zumbi com uma pedra.\n`));

    let subOpcao;
    do {
        subOpcao = Keyboard.questionInt("O que voce faz? ");
        if (subOpcao === 1) {
            console.log(chalk.green("\nVocê acerta uma voadora tão forte que o zumbi voa pelos ares e se despedaça! Vitória brutal!"));
        } else if (subOpcao === 2) {
            hp -= 12;
            console.log(chalk.red(`\nVocê esmagou a cabeça do zumbi, mas ele conseguiu te arranhar antes de morrer. Você perdeu 12 de HP. HP Atual: ${hp}`));
        } else {
            console.log(chalk.red("Opcao invalida."));
        }
    } while (subOpcao !== 1 && subOpcao !== 2);
}



function vazio(){
    console.log("")
}

function linha(){
    
    console.log(chalk.red("=========================================================================================="))
}

function caveiraBizonha(){
    const cinza = chalk.gray;
    const vermelho = chalk.red.bold;
    const amarelo = chalk.yellow.bold; 

    console.log(cinza("      ______                    "));
    console.log(cinza("   .-'      `-.                 "));
    console.log(cinza("  /            \\                "));
    console.log(cinza(" |,  ") + vermelho(".-.") + cinza("  ") + vermelho(".-.") + cinza("  ,|   ") + amarelo("_____  _____    ____   _   _  "));
    console.log(cinza(" | )") + vermelho("(_o/") + cinza("  ") + vermelho("\\o_)") + cinza("( |  ") + amarelo("|_   _||  __ \\  / __ \\ | \\ | | "));
    console.log(cinza(" |/     /\\     \\|    ") + amarelo("| |  | |__) || |  | ||  \\| | "));
    console.log(cinza(" (_     ^^     _)    ") + amarelo("| |  |  _  / | |  | || . ` | "));
    console.log(cinza("  \\__|IIIIII|__/    ") + amarelo("_| |_ | | \\ \\ | |__| || |\\  | "));
    console.log(cinza("   |          |    ") + amarelo("|_____||_|  \\_\\ \\____/ |_| \\_| "));
    
    console.log(cinza("   |          |                 "));
    console.log(cinza("   | \\IIIIII/ |                 "));
    console.log(cinza("   \\          /                 "));
    console.log(cinza("    `--------`                  "));
}



historia()
