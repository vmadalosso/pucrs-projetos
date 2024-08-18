// Importação da classe base AeronaveComercial
const AeronaveComercial = require("./AeronaveComercial")

// Definição da classe AeronavePassageiros, que herda de AeronaveComercial
class AeronavePassageiros extends AeronaveComercial {
  // Definição da classe AeronavePassageiros, que herda de AeronaveComercial
  #passageiros

  // Definição da classe AeronavePassageiros, que herda de AeronaveComercial
  constructor(
    prefixo,
    nomeCompanhia,
    velocidadeCruzeiro,
    autonomia,
    passageiros
  ) {
    // Chamada ao construtor da classe pai (AeronaveComercial)
    super(prefixo, nomeCompanhia, velocidadeCruzeiro, autonomia)
    // Inicialização do atributo específico para a classe AeronavePassageiros
    this.#passageiros = passageiros
  }
}

// Inicialização do atributo específico para a classe AeronavePassageiros
module.exports = AeronavePassageiros
