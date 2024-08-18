-- Script para criação da Tabela 'Construtora'
CREATE TABLE construtora (
  codigo INT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  telefone VARCHAR(20) NOT NULL,
  nome_fantasia VARCHAR(100)
);

-- Script para popular a Tabela 'Construtora'
INSERT INTO construtora (codigo, nome, telefone, nome_fantasia)
VALUES (1, 'Vitor Madalosso', '2039478580', 'Say Yes Gambiarra');

-- Script para criação da Tabela 'Obra'
CREATE TABLE obra (
  codigo INT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  logradouro VARCHAR(100) NOT NULL,
  numero INT NOT NULL,
  complemento VARCHAR(100),
  construtora_codigo INT,
  FOREIGN KEY (construtora_codigo) REFERENCES construtora(codigo)
);

-- Script para popular a Tabela 'Obra'
INSERT INTO obra (codigo, nome, logradouro, numero, complemento, construtora_codigo)
VALUES (1, 'Reforma Banheiro', 'Rua Otavio Correia', 123, NULL, 1);

INSERT INTO obra (codigo, nome, logradouro, numero, complemento, construtora_codigo)
VALUES (2, 'Chale de Madeira', 'Avenida Ipiranga', 456, 'ao lado da pucrs', 1);

-- Script para criação da Tabela 'Trabalhador'
CREATE TABLE trabalhador (
  cpf VARCHAR(11) PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  salario DECIMAL(10, 2) NOT NULL,
  codigo_obra INT,
  FOREIGN KEY (codigo_obra) REFERENCES obra(codigo)
);

-- Script para popular a Tabela 'Trabalhador'
INSERT INTO trabalhador (cpf, nome, salario, codigo_obra)
VALUES ('12345678901', 'Renato', 2500.00, 1);

INSERT INTO trabalhador (cpf, nome, salario, codigo_obra)
VALUES ('98765432312', 'Geromel', 3000.00, 1);

INSERT INTO trabalhador (cpf, nome, salario, codigo_obra)
VALUES ('23444343444', 'Walter', 2000.00, 1);

INSERT INTO trabalhador (cpf, nome, salario, codigo_obra)
VALUES ('12313454543', 'Soarez', 1000.00, 1);

INSERT INTO trabalhador (cpf, nome, salario, codigo_obra)
VALUES ('65464645666', 'Ferreira', 4000.00, 1);

INSERT INTO trabalhador (cpf, nome, salario, codigo_obra)
VALUES ('98897897898', 'Diogo', 2000.00, 2);

INSERT INTO trabalhador (cpf, nome, salario, codigo_obra)
VALUES ('54353453453', 'Felipe', 1000.00, 2);

INSERT INTO trabalhador (cpf, nome, salario, codigo_obra)
VALUES ('54534534555', 'Darlan', 3000.00, 2);

INSERT INTO trabalhador (cpf, nome, salario, codigo_obra)
VALUES ('98765432101', 'Lucas', 2000.00, 2);

INSERT INTO trabalhador (cpf, nome, salario, codigo_obra)
VALUES ('45678912301', 'Pedro', 3500.00, 2);

-- Script para criação da Tabela 'Categoria'
CREATE TABLE categoria (
  codigo INT PRIMARY KEY,
  descricao VARCHAR(100) NOT NULL
);

-- Script para popular da Tabela 'Categoria'
INSERT INTO categoria (codigo, descricao)
VALUES (1, 'Ferramentas Manuais');
       
INSERT INTO categoria (codigo, descricao)
VALUES (2, 'Ferramentas Eletricas');

-- Script para criação da Tabela 'Equipamento'
CREATE TABLE equipamento (
  codigo INT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  valor_uso_diario DECIMAL(10, 2) NOT NULL,
  categoria_codigo INT,
  obra_codigo INT,
  FOREIGN KEY (categoria_codigo) REFERENCES categoria(codigo),
  FOREIGN KEY (obra_codigo) REFERENCES obra(codigo)
);

-- Script para popular da Tabela 'Equipamento'
INSERT INTO equipamento (codigo, nome, valor_uso_diario, categoria_codigo, obra_codigo)
VALUES (1, 'Furadeira', 50.00, 2, 1);
       
INSERT INTO equipamento (codigo, nome, valor_uso_diario, categoria_codigo, obra_codigo)
VALUES (2, 'Trena', 5.00, 1, 1);
       
INSERT INTO equipamento (codigo, nome, valor_uso_diario, categoria_codigo, obra_codigo)
VALUES (3, 'Serra de Mesa', 40.00, 2, 1);
       
INSERT INTO equipamento (codigo, nome, valor_uso_diario, categoria_codigo, obra_codigo)
VALUES (4, 'Martelo', 10.00, 1, 1);

-- SCRIPTS DE CONSULTA

-- a) Selecionar CPFs e nomes dos trabalhadores que ganham mais do que 2.500,00;
SELECT cpf, nome
FROM trabalhador
WHERE salario > 2500.00;

--b) Selecionar nomes e salários dos trabalhadores da empresa Vitor Madalosso, ordenados em ordem alfabética crescente:
SELECT trabalhador.nome, trabalhador.salario
FROM trabalhador
INNER JOIN obra ON trabalhador.codigo_obra = obra.codigo
INNER JOIN construtora ON obra.construtora_codigo = construtora.codigo
WHERE construtora.nome = 'Vitor Madalosso'
ORDER BY trabalhador.nome ASC;

-- d) Calcular e exibir a folha de pagamento de cada obra. Uma folha de pagamento é determinada pela soma dos salários dos seus trabalhadores.
SELECT o.codigo AS codigo_obra, o.nome AS nome_obra, SUM(t.salario) AS folha_pagamento
FROM obra o
JOIN trabalhador t ON o.codigo = t.codigo_obra
GROUP BY o.codigo, o.nome;

-- e) Listar as categorias de equipamentos utilizadas nas obras da construtora Vitor Madalosso:
SELECT DISTINCT categoria.descricao
FROM categoria
INNER JOIN equipamento ON categoria.codigo = equipamento.categoria_codigo
INNER JOIN obra ON equipamento.obra_codigo = obra.codigo
INNER JOIN construtora ON obra.construtora_codigo = construtora.codigo
WHERE construtora.nome = 'Vitor Madalosso';