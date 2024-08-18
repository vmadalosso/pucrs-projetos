// Módulo 'fs' (File System) esse módulo é requerido para gerar os arquivos texto de dados
const fs = require("fs")

// Importação da classe Piloto
const Piloto = require("./Piloto")

// Classe ServicoPilotos representa um serviço para gerenciar pilotos
class ServicoPilotos {
  // Atributo privado que armazena as instâncias de pilotos
  #pilotos

  // Construtor da classe
  constructor() {
    // Inicializa o atributo #pilotos com instâncias de diferentes pilotos
    this.#pilotos = [
      new Piloto("001", "Vitor Madalosso", false),
      new Piloto("002", "Brendan Eich", true),
      new Piloto("003", "Dan Abramov", true),
      new Piloto("004", "Brad Frost", true),
    ]
  }

  // Método que obtém um piloto específico pela matrícula
  obterPilotoPorMatricula(matricula) {
    return this.#pilotos.find((piloto) => piloto.matricula === matricula)
  }

  // Método que retorna a lista de pilotos
  getPilotos() {
    return this.#pilotos
  }

  // Método que gera um arquivo CSV com informações sobre pilotos (arquivo texto de dados)
  gerarArquivoPilotos() {
    // Mapeia cada piloto para uma string de dados formatada
    const linhas = this.#pilotos.map(
      (p) => `${p.matricula},${p.nome},${p.habilitacao}`
    )
    // Junta as linhas com quebras de linha
    const conteudo = linhas.join("\n")

    // Escreve o conteúdo no arquivo 'dados_pilotos.csv'
    fs.writeFileSync("dados_pilotos.csv", conteudo, "utf-8")
    console.log("Arquivo de pilotos criado com sucesso.")
  }
}

// Exporta a classe ServicoPilotos para ser utilizada em outros módulos
module.exports = ServicoPilotos
