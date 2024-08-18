// Importação dos Módulos necessários
const Sistema = require("./Sistema")
const ServicoPilotos = require("./ServicoPilotos")
const ServicoAeronaves = require("./ServicoAeronaves")
const ServicoAerovias = require("./ServicoAerovias")

// Definição e Instância dos Serviços
const servicoPilotos = new ServicoPilotos()
const servicoAeronaves = new ServicoAeronaves()
const servicoAerovias = new ServicoAerovias()

// Criação da Instância do Sistema
let sistema = new Sistema(servicoPilotos, servicoAeronaves, servicoAerovias)

// Loop para exibir o menu continuamente
function exibirMenuLoop() {
  sistema.exibirMenu() // Chama o método do sistema para exibir o menu

  // Configuração da Interface de Leitura
  const readline = require("readline")
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  })

  // Pergunta ao usuário e executa a opção escolhida
  rl.question("Escolha uma opção: ", (opcao) => {
    sistema.executarOpcao(opcao) // Chama o método do sistema para executar a opção escolhida
    rl.close() // Fecha a interface de leitura
    exibirMenuLoop() // Chama recursivamente para exibir o menu novamente
  })
}

// Inicia o loop para exibir o menu
exibirMenuLoop()
