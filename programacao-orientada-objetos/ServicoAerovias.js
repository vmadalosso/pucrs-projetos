// Módulo 'fs' (File System) esse módulo é requerido para gerar os arquivos texto de dados
const fs = require("fs")

// Importação da classe Aerovia
const Aerovia = require("./Aerovia")

// Serviço para gerenciar aerovias
class ServicoAerovias {
  // Atributo privado que armazena as instâncias de aerovias
  #aerovias

  // Construtor da classe
  constructor() {
    // Inicializa o atributo #aerovias com instâncias de diferentes aerovias
    this.#aerovias = [
      new Aerovia("POA-FLO", "Porto Alegre", "Florianópolis", 1000),
      new Aerovia("FLO-POA", "Florianópolis", "Porto Alegre", 1000),
      new Aerovia("POA-SP", "Porto Alegre", "São Paulo", 1000),
      new Aerovia("SP-POA", "São Paulo", "Porto Alegre", 1000),
    ]
  }

  // Método que retorna a lista de aerovias
  getAerovias() {
    return this.#aerovias
  }

  // Método que retorna a lista de aerovias
  obterAeroviaPorIdentificador(identificador) {
    return this.#aerovias.find(
      (aerovia) => aerovia.getIdentificador() === identificador
    )
  }

  // Método que gera um arquivo CSV com informações sobre as aerovias (arquivo texto de dados)
  gerarArquivoAerovias() {
    // Mapeia cada aerovia para uma string de dados formatada
    const linhas = this.#aerovias.map(
      (a) =>
        `${a.getIdentificador()},${a.aeroportoOrigem},${a.aeroportoDestino},${
          a.tamanho
        }`
    )
    // Junta as linhas com quebras de linha
    const conteudo = linhas.join("\n")

    // Escreve o conteúdo no arquivo 'dados_aerovias.csv'
    fs.writeFileSync("dados_aerovias.csv", conteudo, "utf-8")
    console.log("Arquivo de aerovias criado com sucesso.")
  }
}

// Exporta a classe ServicoAerovias para ser utilizada em outros módulos
module.exports = ServicoAerovias
