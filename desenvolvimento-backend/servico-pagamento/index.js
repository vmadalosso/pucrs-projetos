import fastify from 'fastify';
import pagamentoRoutes from './routes/pagamento.js';

// Cria uma instância do servidor Fastify
const server = fastify();

// Registra as rotas para o serviço de pagamento com um prefixo
server.register(pagamentoRoutes, { prefix: '/servpag' });

// Função assíncrona para iniciar o servidor
const start = async () => {
    try {
        // Faz o servidor escutar na porta 3002
        await server.listen(3002);
        console.log('Serviço de Pagamento rodando em http://localhost:3002');
    } catch (err) {
        // Em caso de erro ao iniciar o servidor, exibe o erro e encerra o processo
        console.error(err);
        process.exit(1);
    }
};

// Inicia o servidor chamando a função start
start();
