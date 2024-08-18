// Importar o serviço de cadastro que contém as funções para manipulação de clientes, aplicativos e assinaturas
import * as cadastroService from '../services/servicoCadastro.js';

// Exportar uma função que registra as rotas relacionadas ao serviço de cadastro
export default async function (fastify, opts) {

    // Rota para listar todos os clientes
    fastify.get('/clientes', async (request, reply) => {
        // Chamar a função do serviço de cadastro para obter a lista de clientes
        const clientes = cadastroService.listarClientes();
        // Retornar a lista de clientes para o cliente que fez a requisição
        return clientes;
    });

    // Rota para listar todos os aplicativos
    fastify.get('/aplicativos', async (request, reply) => {
        // Chamar a função do serviço de cadastro para obter a lista de aplicativos
        const aplicativos = cadastroService.listarAplicativos();
        // Retornar a lista de aplicativos para o cliente que fez a requisição
        return aplicativos;
    });

    // Rota para criar uma nova assinatura
    fastify.post('/assinaturas', async (request, reply) => {
        // Extrair o código do cliente e do aplicativo do corpo da requisição
        const { codCliente, codAplicativo } = request.body;
        // Chamar a função do serviço de cadastro para criar uma nova assinatura
        const assinatura = cadastroService.criarAssinatura(codCliente, codAplicativo);
        // Retornar a nova assinatura criada para o cliente que fez a requisição
        return assinatura;
    });

    // Rota para atualizar o custo mensal de um aplicativo
    fastify.patch('/aplicativos/:idAplicativo', async (request, reply) => {
        // Extrair o ID do aplicativo dos parâmetros da requisição
        const { idAplicativo } = request.params;
        // Extrair o novo custo do aplicativo do corpo da requisição
        const { custo } = request.body;
        // Chamar a função do serviço de cadastro para atualizar o custo do aplicativo
        const aplicativo = cadastroService.atualizarCustoAplicativo(idAplicativo, custo);
        // Se o aplicativo for encontrado e atualizado com sucesso, retornar o aplicativo atualizado
        // Caso contrário, retornar uma mensagem de erro com o código de status 404
        if (aplicativo) {
            return aplicativo;
        } else {
            reply.code(404).send({ message: `Aplicativo ${idAplicativo} não encontrado` });
        }
    });

    // Rota para listar assinaturas por tipo
    fastify.get('/assinaturas/:tipo', async (request, reply) => {
        // Extrair o tipo de assinatura dos parâmetros da requisição
        const { tipo } = request.params;
        // Chamar a função do serviço de cadastro para obter a lista de assinaturas do tipo especificado
        const assinaturas = cadastroService.listarAssinaturasPorTipo(tipo);
        // Retornar a lista de assinaturas para o cliente que fez a requisição
        return assinaturas;
    });

    // Rota para listar assinaturas de um cliente específico
    fastify.get('/asscli/:codcli', async (request, reply) => {
        // Extrair o código do cliente dos parâmetros da requisição
        const { codcli } = request.params;
        // Chamar a função do serviço de cadastro para obter a lista de assinaturas do cliente especificado
        const assinaturas = cadastroService.listarAssinaturasPorCliente(codcli);
        // Retornar a lista de assinaturas para o cliente que fez a requisição
        return assinaturas;
    });

    // Rota para listar assinaturas de um aplicativo específico
    fastify.get('/assapp/:codapp', async (request, reply) => {
        // Extrair o código do aplicativo dos parâmetros da requisição
        const { codapp } = request.params;
        // Chamar a função do serviço de cadastro para obter a lista de assinaturas do aplicativo especificado
        const assinaturas = cadastroService.listarAssinaturasPorAplicativo(codapp);
        // Retornar a lista de assinaturas para o cliente que fez a requisição
        return assinaturas;
    });
}
