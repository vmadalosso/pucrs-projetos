// Importa o módulo Fastify, que é um framework para criar servidores web em Node.js
import fastify from 'fastify';

// Importa o módulo de rotas para o serviço de cadastro
import cadastroRoutes from './routes/cadastro.js';

// Cria uma instância do servidor Fastify
const server = fastify();

// Registra o módulo de rotas de cadastro no servidor
// O prefixo '/servcad' será adicionado a todas as rotas definidas em cadastroRoutes
server.register(cadastroRoutes, { prefix: '/servcad' });

// Função assíncrona para iniciar o servidor
const start = async () => {
    try {
        // O servidor escuta na porta 3001
        await server.listen(3001);
        // Exibe uma mensagem no console indicando que o servidor está em execução
        console.log('Serviço de Cadastro rodando em http://localhost:3001');
    } catch (err) {
        // Se houver um erro ao iniciar o servidor, exibe o erro no console e encerra o processo
        console.error(err);
        process.exit(1);
    }
};

// Chama a função para iniciar o servidor
start();
