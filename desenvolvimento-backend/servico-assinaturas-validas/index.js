// Importar o módulo Fastify para criar e gerenciar o servidor HTTP
import fastify from 'fastify';

// Importar as rotas para o serviço de assinaturas válidas
import validasRoutes from './routes/assinaturasValidas.js';

// Criar uma instância do servidor Fastify
const server = fastify();

// Registrar as rotas de assinaturas válidas com o prefixo '/servass'
// Isso significa que todas as rotas definidas em 'assinaturasValidas.js' estarão acessíveis sob esse prefixo
server.register(validasRoutes, { prefix: '/servass' });

// Função para iniciar o servidor
const start = async () => {
    try {
        // Iniciar o servidor na porta 3003
        await server.listen(3003);
        console.log('Serviço de Assinaturas Válidas rodando em http://localhost:3003');
    } catch (err) {
        // Capturar e exibir erros, se ocorrerem
        console.error(err);
        process.exit(1);
    }
};

// Chamar a função de início do servidor
start();
