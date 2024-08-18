<h1 align="center">Projeto POO - Fase 2</h1>

<p align="center">
Projeto individual disciplina de Programação Orientada a Objetos - PUCRS<br/>Aluno - Vitor Madalosso<br/>
</p>

<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-execução">Execução</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

<p align="center">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=49AA26&labelColor=000000">
</p>

<br>

<p align="center">
  <img alt="PUCRS" src=".github/preview.jpeg" width="30%">
</p>

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- JavaScript
- Node.js
- Git e Github

## 💻 Projeto

O objetivo geral deste trabalho é criar um sistema que auxilie os pilotos na montagem de seus planos de voo. Para tanto, o sistema deve ser capaz de listar as rotas disponíveis para o deslocamento de um ponto a outro em uma determinada data e horário, além de ser capaz de validar os planos de voo submetido pelos pilotos. O detalhamento deste contexto, bem como dos requisitos do sistema encontra-se no documento complementar (arquivo “especificacao_projeto_poo.pdf”).

Neste projeto, você aplicará os conteúdos da disciplina para modelar um sistema complexo, utilizando orientação a objetos e implementando a modelagem proposta usando linguagem de programação JavaScript.

## 🔖 Execução

**PROGRAMA:**

1. Clonar o diretório:

```
git clone https://github.com/vmadalosso/pucrs-oop.git
```

2. Instalar as dependências/bibliotecas utilizadas no programa:

```
npm install
```

3. Pelo terminal e dentro do diretório com o arquivo 'Main.js':

```
node Main.js
```

Um menu com 5 opções será exibido para o usuário:

1. Listar Pilotos

2. Listar Aeronaves

3. Listar Aerovias

4. Gerar Arquivo de Dados (**Essa opção gera 3 arquivos texto de dados .csv no diretório raíz. Você pode deletar os 3 arquivos .csv e gerar novamente para testar a funcionalidade**)

5. Sair do Programa

**TESTES:**

**ATENÇÃO**: Foi utilizada a biblioteca "Jest" para desenvolver e rodar os testes. Caso os mesmos não estejam funcionando corretamente, verifique se a biblioteca foi instalada:

```
npm install --save-dev jest
```

Para realização dos testes, dentro do mesmo diretório dos arquivos com a extensão ".test.js", execute o comando abaixo:

```
npx jest
```

Caso preferir executar cada um dos testes isoladamente:

```
npx jest NomeDoArquivo.test.js
```

Arquivos dos Testes:

```
ServicoAeronaves.test.js
ServicoAerovias.test.js
ServicoPilotos.test.js
```

## 📝 Licença

Esse projeto está sob a licença MIT.

---

Feito com ♥ by Vitor Madalosso 👋
