// Importação da classe base Aeronave
const Aeronave = require("./Aeronave")

// Definição da classe AeronaveParticular, que herda de Aeronave
class AeronaveParticular extends Aeronave {
  // Atributo privado específico para a classe AeronaveParticular
  #nomeEmpresaManutencao

  // Construtor da classe AeronaveParticular
  constructor(prefixo, nomeEmpresaManutencao, velocidadeCruzeiro, autonomia) {
    // Construtor da classe AeronaveParticular
    super(prefixo, "particular", velocidadeCruzeiro, autonomia)
    // Inicialização do atributo específico para a classe AeronaveParticular
    this.#nomeEmpresaManutencao = nomeEmpresaManutencao
  }

  // Método público para obter o nome da empresa de manutenção
  getNomeEmpresaManutencao() {
    return this.#nomeEmpresaManutencao
  }
}

// Método público para obter o nome da empresa de manutenção
module.exports = AeronaveParticular
