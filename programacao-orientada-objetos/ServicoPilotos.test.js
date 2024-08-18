/* 
  Teste para o método 'obterPilotoPorMatricula' do serviço 'ServicoPilotos'.

  Este teste verifica se o serviço de pilotos é capaz de recuperar um piloto específico
  com base na matrícula fornecida e se os dados desse piloto são corretos.

  Detalhes do teste:
  - Cria uma instância do ServicoPilotos antes de cada teste, fornecendo um ambiente limpo para cada execução.
  - Chama o método 'obterPilotoPorMatricula' com a matrícula "003" e armazena o resultado na variável 'piloto'.
  - Verifica se 'piloto' é uma instância da classe Piloto.
  - Verifica se o nome do piloto retornado é "Dan Abramov".
  - Verifica se a habilitação do piloto retornado é true.

*/

const ServicoPilotos = require("./ServicoPilotos")
const Piloto = require("./Piloto")

describe("Serviço de Pilotos", () => {
  // Define um bloco de testes para o servico de pilotos
  test("Deve obter um piloto por matrícula corretamente", () => {
    // Verifica se o método 'obterPilotoPorMatricula' do 'ServicoPilotos' funciona corretamente.
    const servicoPilotos = new ServicoPilotos() // Cria uma instância do serviço de pilotos antes de cada teste, fornecendo um ambiente limpo para cada execução.
    const piloto = servicoPilotos.obterPilotoPorMatricula("003") // Chama o método 'obterPilotoPorMatricula' com a matrícula "003" e armazena o resultado na variável 'piloto'.
    expect(piloto).toBeInstanceOf(Piloto) // Teste de afirmação que verifica se o objeto retornado pelo método é uma instância da classe Piloto
    expect(piloto.nome).toBe("Dan Abramov") // Outro teste de afirmação que verifica se o nome do piloto retornado é "Dan Abramov".
    expect(piloto.habilitacao).toBe(true) // Outro teste de afirmação que verifica se a habilitação do piloto retornado é "true".
  })
})
