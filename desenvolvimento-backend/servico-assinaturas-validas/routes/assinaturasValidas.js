// Importa o serviço que lida com assinaturas válidas
import * as validasService from '../services/servicoAssinaturasValidas.js';

// Exporta uma função assíncrona que registra as rotas
export default async function (fastify, opts) {
    // Define uma rota GET para '/validas' que lista todas as assinaturas válidas
    fastify.get('/validas', async (request, reply) => {
        // Chama a função listarAssinaturasValidas do serviço para obter a lista de assinaturas válidas
        const assinaturasValidas = validasService.listarAssinaturasValidas();
        
        // Retorna a lista de assinaturas válidas na resposta
        return assinaturasValidas;
    });
}
