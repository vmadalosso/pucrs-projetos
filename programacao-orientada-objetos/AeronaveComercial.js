// Importação da classe base Aeronave
const Aeronave = require("./Aeronave")

// Definição da classe AeronaveComercial, que herda de Aeronave
class AeronaveComercial extends Aeronave {
  // Atributo privado específico para a classe AeronaveComercial
  #nomeCompanhia

  // Construtor da classe AeronaveComercial
  constructor(prefixo, nomeCompanhia, velocidadeCruzeiro, autonomia) {
    // Chamada ao construtor da classe pai (Aeronave)
    super(prefixo, "comercial", velocidadeCruzeiro, autonomia)
    // Inicialização do atributo específico para a classe AeronaveComercial
    this.#nomeCompanhia = nomeCompanhia
  }
}

// Exportação da classe AeronaveComercial para utilização em outros arquivos
module.exports = AeronaveComercial
