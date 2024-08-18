// Importação da classe base AeronaveComercial
const AeronaveComercial = require("./AeronaveComercial")

// Definição da classe AeronaveCarga, que herda de AeronaveComercial
class AeronaveCarga extends AeronaveComercial {
  // Atributo privado específico para a classe AeronaveCarga
  #pesoMaximoCarga

  // Construtor da classe AeronaveCarga
  constructor(
    prefixo,
    nomeCompanhia,
    velocidadeCruzeiro,
    autonomia,
    pesoMaximoCarga
  ) {
    // Chamada ao construtor da classe pai (AeronaveComercial)
    super(prefixo, nomeCompanhia, velocidadeCruzeiro, autonomia)
    // Inicialização do atributo específico para a classe AeronaveCarga
    this.#pesoMaximoCarga = pesoMaximoCarga
  }
}

// Exportação da classe AeronaveCarga para utilização em outros arquivos
module.exports = AeronaveCarga
