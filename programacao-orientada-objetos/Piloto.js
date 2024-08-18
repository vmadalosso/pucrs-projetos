// Classe que representa Piloto
class Piloto {
  // Construtor da classe
  constructor(matricula, nome, habilitacao) {
    this.matricula = matricula // Atributo que armazena a matrícula do piloto
    this.nome = nome // Atributo que armazena o nome do piloto
    this.habilitacao = habilitacao // true para ativo, false para inativo
  }
}

// Exporta a classe Piloto para ser utilizada em outros módulos
module.exports = Piloto
