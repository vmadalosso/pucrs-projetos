// Classe que representa aerovia
class Aerovia {
  // Atributo privado para o identificador da aerovia
  #identificador

  // Construtor da classe Aerovia
  constructor(identificador, aeroportoOrigem, aeroportoDestino, tamanho) {
    // Inicialização do atributo privado identificador
    this.#identificador = identificador
    // Inicialização de outros atributos públicos
    this.aeroportoOrigem = aeroportoOrigem
    this.aeroportoDestino = aeroportoDestino
    this.tamanho = tamanho
  }

  // Método para obter o identificador da aerovia
  getIdentificador() {
    return this.#identificador
  }
}

// Exportação da classe Aerovia para utilização em outros arquivos
module.exports = Aerovia
