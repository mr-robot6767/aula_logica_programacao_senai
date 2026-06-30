const Keyboard = require("readline-sync");

let contas = [];

function criarCadastroBase() {
  return {
    nomeCompleto: null,
    senha: null,
    cpf: null,
    saldo: 0,
    extrato: [],
    emprestimos: []
  };
}

function registrarTransacao(conta, tipo, valor, detalhes) {
  conta.extrato.push({ tipo: tipo, valor: valor, detalhes: detalhes, data: new Date().toLocaleString("pt-BR") });
}

function lerValorSimples(mensagem) {
  let valor = 0;
  do {
    valor = Number(Keyboard.question(mensagem).replace(",", "."));
    if (!(valor > 0)) console.log("[ERRO] Digite um valor maior que zero.");
  } while (!(valor > 0));
  return valor;
}

function criarConta() {
  let novaConta = criarCadastroBase();
  let nome = Keyboard.question("Nome completo: ");
  let cpf = Keyboard.question("CPF: ");
  for (let i = 0; i < contas.length; i++) {
    if (contas[i].nomeCompleto.toLowerCase() === nome.toLowerCase()) { console.log("[ERRO] Nome já cadastrado."); return; }
    if (contas[i].cpf === cpf) { console.log("[ERRO] CPF já cadastrado."); return; }
  }
  novaConta.nomeCompleto = nome;
  novaConta.cpf = cpf;
  novaConta.senha = Keyboard.question("Senha: ", { hideEchoBack: true, mask: "*" });
  contas.push(novaConta);
  console.log("[SUCESSO] Conta criada.");
  if (Keyboard.keyInYN("Fazer login agora? ")) login();
}

function login() {
  if (contas.length === 0) { console.log("Nenhuma conta. Criando uma."); criarConta(); return; }
  let nome = Keyboard.question("Usuário: ");
  let senha = Keyboard.question("Senha: ", { hideEchoBack: true, mask: "*" });
  let usuarioLogado = null;
  for (let i = 0; i < contas.length; i++) {
    if (contas[i].nomeCompleto.toLowerCase() === nome.toLowerCase() && contas[i].senha === senha) { usuarioLogado = contas[i]; break; }
  }
  if (!usuarioLogado) { console.log("[ERRO] Usuário ou senha inválidos."); if (Keyboard.keyInYN("Tentar novamente? ")) login(); return; }
  menuPrincipal(usuarioLogado);
}

function depositar(conta) {
  let valor = lerValorSimples("Valor para depositar: R$ ");
  conta.saldo += valor;
  registrarTransacao(conta, "Depósito", valor, "");
  console.log("[SUCESSO] Depósito: R$ " + valor.toFixed(2));
}

function sacar(conta) {
  let valor = lerValorSimples("Valor para sacar: R$ ");
  if (valor > conta.saldo) { console.log("[ERRO] Saldo insuficiente. Saldo: R$ " + conta.saldo.toFixed(2)); return; }
  conta.saldo -= valor;
  registrarTransacao(conta, "Saque", valor, "");
  console.log("[SUCESSO] Saque: R$ " + valor.toFixed(2));
}

function solicitarEmprestimo(conta) {
  let valorSolicitado = lerValorSimples("Valor do empréstimo: R$ ");
  let juros = 0.05;
  let total = valorSolicitado * (1 + juros);
  let parcelas = 10;
  let valorParcela = total / parcelas;
  conta.saldo += valorSolicitado;
  conta.emprestimos.push({ valorSolicitado: valorSolicitado, totalPagar: total, saldoDevedor: total, parcelasRestantes: parcelas, valorParcela: valorParcela, quitado: false });
  registrarTransacao(conta, "Empréstimo", valorSolicitado, "Total: R$ " + total.toFixed(2));
  console.log("[SUCESSO] Empréstimo aprovado: R$ " + valorSolicitado.toFixed(2));
}

function descontarParcelaEmprestimo(conta) {
  for (let i = 0; i < conta.emprestimos.length; i++) {
    let emprestimo = conta.emprestimos[i];
    if (!emprestimo.quitado && emprestimo.parcelasRestantes > 0) {
      if (conta.saldo >= emprestimo.valorParcela) {
        conta.saldo -= emprestimo.valorParcela;
        emprestimo.saldoDevedor -= emprestimo.valorParcela;
        emprestimo.parcelasRestantes--;
        if (emprestimo.saldoDevedor <= 0 || emprestimo.parcelasRestantes === 0) {
          emprestimo.saldoDevedor = 0; emprestimo.parcelasRestantes = 0; emprestimo.quitado = true;
          registrarTransacao(conta, "Parcela", emprestimo.valorParcela, "Quitado");
        } else {
          registrarTransacao(conta, "Parcela", emprestimo.valorParcela, "Restam: " + emprestimo.parcelasRestantes);
        }
      } else {
        console.log("[AVISO] Empréstimo aberto, saldo insuficiente para parcela.");
      }
      return;
    }
  }
}

function exibirExtrato(conta) {
  descontarParcelaEmprestimo(conta);
  console.log("\n=== EXTRATO ===");
  if (conta.extrato.length === 0) console.log("Sem movimentações.");
  for (let i = 0; i < conta.extrato.length; i++) {
    let transacao = conta.extrato[i];
    let linha = "[" + transacao.data + "] " + transacao.tipo + ": R$ " + transacao.valor.toFixed(2);
    if (transacao.detalhes) linha += " | " + transacao.detalhes;
    console.log(linha);
  }
  console.log("Saldo: R$ " + conta.saldo.toFixed(2));
  console.log("=== EMPRÉSTIMOS ===");
  if (conta.emprestimos.length === 0) console.log("Nenhum empréstimo.");
  for (let i = 0; i < conta.emprestimos.length; i++) {
    let emprestimo = conta.emprestimos[i];
    console.log("Empréstimo " + (i + 1) + " - Solicitado: R$ " + emprestimo.valorSolicitado.toFixed(2) + " | Saldo: R$ " + emprestimo.saldoDevedor.toFixed(2) + " | Restam: " + emprestimo.parcelasRestantes);
  }
  Keyboard.question("Enter para voltar...");
}

function menuPrincipal(conta) {
  let sair = false;
  while (!sair) {
    console.log("\n=== MENU ===\nCliente: " + conta.nomeCompleto + " | Saldo: R$ " + conta.saldo.toFixed(2));
    console.log("1.Depositar 2.Sacar 3.Empréstimo 4.Extrato 5.Trocar conta 6.Criar conta 0.Sair");
    let opcao = Keyboard.question("Escolha: ");
    switch (opcao) {
      case "1": depositar(conta); break;
      case "2": sacar(conta); break;
      case "3": solicitarEmprestimo(conta); break;
      case "4": exibirExtrato(conta); break;
      case "5": console.log("Trocando de conta..."); login(); return;
      case "6": criarConta(); break;
      case "0": console.log("Até logo, " + conta.nomeCompleto + "!"); sair = true; break;
      default: console.log("[ERRO] Opção inválida.");
    }
  }
}

function inicio() {
  if (contas.length === 0) { console.log("Nenhuma conta. Criando a primeira."); criarConta(); return; }
  if (Keyboard.keyInYN("Criar conta? (N para login)")) criarConta(); else login();
}

inicio();
