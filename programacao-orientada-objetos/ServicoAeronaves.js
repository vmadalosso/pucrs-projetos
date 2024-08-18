// Módulo 'fs' (File System) esse módulo é requerido para gerar os arquivos texto de dados
const fs = require("fs")

// Importação das classes de Aeronaves específicas
const AeronaveParticular = require("./AeronaveParticular")
const AeronavePassageiros = require("./AeronavePassageiros")
const AeronaveCarga = require("./AeronaveCarga")

// Classe ServicoAeronaves representa um serviço para gerenciar aeronaves
class ServicoAeronaves {
  // Atributo privado que armazena as instâncias de aeronaves
  #aeronaves

  // Construtor da classe
  constructor() {
    // Inicializa o atributo #aeronaves com instâncias de diferentes tipos de aeronaves
    this.#aeronaves = [
      new AeronaveParticular("PR001", "ManutençãoAero", 400, 2000),
      new AeronavePassageiros("PP002", "CompanhiaAerea1", 800, 3000, 150),
      new AeronaveCarga("PC003", "CompanhiaAerea2", 600, 2500, 10),
    ]
  }

  // Método que retorna a lista de aeronaves
  getAeronaves() {
    return this.#aeronaves
  }

  // Método que obtém uma aeronave específica pelo prefixo
  obterAeronavePorPrefixo(prefixo) {
    return this.#aeronaves.find((aeronave) => aeronave.getPrefixo() === prefixo)
  }

  // Método que gera um arquivo CSV com informações sobre as aeronaves (arquivo texto de dados)
  gerarArquivoAeronaves() {
    // Mapeia cada aeronave para uma string de dados formatada
    const linhas = this.#aeronaves.map(
      (a) =>
        `${a.getPrefixo()},${a.getTipo()},${a.getVelocidadeCruzeiro()},${a.getAutonomia()}`
    )
    // Junta as linhas com quebras de linha
    const conteudo = linhas.join("\n")

    // Escreve o conteúdo no arquivo 'dados_aeronaves.csv'
    fs.writeFileSync("dados_aeronaves.csv", conteudo, "utf-8")
    console.log("Arquivo de aeronaves criado com sucesso.")
  }
}
// Exporta a classe ServicoAeronaves para ser utilizada em outros módulos
module.exports = ServicoAeronaves
