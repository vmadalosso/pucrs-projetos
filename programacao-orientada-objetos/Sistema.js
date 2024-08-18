// Módulo 'fs' (File System) esse módulo é requerido para gerar os arquivos texto de dados
const fs = require("fs")

// Classe Sistema representa o núcleo do programa de gerenciamento de dados
class Sistema {
  // Atributos privados que armazenam instâncias dos serviços de pilotos, aeronaves e aerovias
  #servicoPilotos
  #servicoAeronaves
  #servicoAerovias

  // Construtor que recebe instâncias dos serviços como parâmetros
  constructor(servicoPilotos, servicoAeronaves, servicoAerovias) {
    this.#servicoPilotos = servicoPilotos
    this.#servicoAeronaves = servicoAeronaves
    this.#servicoAerovias = servicoAerovias
  }

  // Métodos que retornam as instâncias dos serviços
  getServicoPilotos() {
    return this.#servicoPilotos
  }

  getServicoAeronaves() {
    return this.#servicoAeronaves
  }

  getServicoAerovias() {
    return this.#servicoAerovias
  }

  // Método que exibe o menu principal
  exibirMenu() {
    console.log("\n---- Menu ----")
    console.log("1. Listar Pilotos")
    console.log("2. Listar Aeronaves")
    console.log("3. Listar Aerovias")
    console.log("4. Gerar Arquivos de Dados")
    console.log("5. Sair")
  }

  // Método que executa uma opção do menu com base no input do usuário
  executarOpcao(opcao) {
    switch (opcao) {
      case "1":
        this.#listarPilotos()
        break
      case "2":
        this.#listarAeronaves()
        break
      case "3":
        this.#listarAerovias()
        break
      case "4":
        this.#gerarArquivosDados()
        break

      case "5":
        console.log("Encerrando o sistema.")
        process.exit(0)

      default:
        console.log("Opção inválida. Tente novamente.")
    }
  }

  // Métodos privados que listam pilotos, aeronaves e aerovias
  #listarPilotos() {
    console.log("\n---- Lista de Pilotos ----")
    this.#servicoPilotos.getPilotos().forEach((piloto) => {
      console.log(
        `Matrícula: ${piloto.matricula}, Nome: ${piloto.nome}, Habilitação: ${
          piloto.habilitacao ? "Ativo" : "Inativo"
        }`
      )
    })
  }

  #listarAeronaves() {
    console.log("\n---- Lista de Aeronaves ----")
    this.#servicoAeronaves.getAeronaves().forEach((aeronave) => {
      console.log(
        `Prefixo: ${aeronave.getPrefixo()}, Tipo: ${aeronave.getTipo()}, Velocidade de Cruzeiro: ${aeronave.getVelocidadeCruzeiro()}, Autonomia: ${aeronave.getAutonomia()}`
      )
    })
  }

  #listarAerovias() {
    console.log("\n---- Lista de Aerovias ----")
    this.#servicoAerovias.getAerovias().forEach((aerovia) => {
      console.log(
        `Identificador: ${aerovia.getIdentificador()}, Origem: ${
          aerovia.aeroportoOrigem
        }, Destino: ${aerovia.aeroportoDestino}, Tamanho: ${aerovia.tamanho}`
      )
    })
  }

  // Método privado que gera arquivos de dados para pilotos, aeronaves e aerovias (arquivo texto de dados)
  #gerarArquivosDados() {
    this.#servicoPilotos.gerarArquivoPilotos()
    this.#servicoAeronaves.gerarArquivoAeronaves()
    this.#servicoAerovias.gerarArquivoAerovias()
    console.log("Arquivos de dados gerados com sucesso.")
  }
}

// Exporta a classe Sistema para ser utilizada em outros módulos
module.exports = Sistema
