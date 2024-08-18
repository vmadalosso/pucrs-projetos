// Definição da classe Aeronave
class Aeronave {
  // Atributos privados utilizando a syntaxe # (conceito de encapsulamento em POO)
  #prefixo
  #tipo
  #velocidadeCruzeiro
  #autonomia

  // Construtor da classe Aeronave
  constructor(prefixo, tipo, velocidadeCruzeiro, autonomia) {
    // Inicialização dos atributos no momento da criação de uma instância da classe
    this.#prefixo = prefixo
    this.#tipo = tipo
    this.#velocidadeCruzeiro = velocidadeCruzeiro
    this.#autonomia = autonomia
  }

  // Métodos de acesso para obter os valores dos atributos privados
  getPrefixo() {
    return this.#prefixo
  }

  getTipo() {
    return this.#tipo
  }

  getVelocidadeCruzeiro() {
    return this.#velocidadeCruzeiro
  }

  getAutonomia() {
    return this.#autonomia
  }
}

// Exporta a classe Aeronave para que ela possa ser utilizada em outros arquivos
module.exports = Aeronave
