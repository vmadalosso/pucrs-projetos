// Importa o emitter de eventos e os serviços de pagamento
import { pagamentoEmitter } from '../services/servicoPagamento.js';
import * as pagamentoService from '../services/servicoPagamento.js';

// Observa o evento de 'PagamentoServicoCadastramento'
// Quando um pagamento é cadastrado, a função registrada é chamada
// O pagamento é exibido no console
pagamentoEmitter.on('PagamentoServicoCadastramento', (pagamento) => {
    console.log('Pagamento cadastrado:', pagamento);
});

// Observa o evento de 'PagamentoServicoAssinaturaValida'
// Quando um pagamento é realizado para um serviço de assinatura válida,
// a função registrada é chamada e o pagamento é exibido no console
pagamentoEmitter.on('PagamentoServicoAssinaturaValida', (pagamento) => {
    console.log('Pagamento para serviço de assinatura válida:', pagamento);
});

// Exporta uma função assíncrona que registra as rotas para o servidor Fastify
export default async function (fastify, opts) {
    // Define a rota POST para '/pagar'
    // Esta rota será usada para registrar um pagamento
    fastify.post('/pagar', async (request, reply) => {
        // Extrai os dados do corpo da solicitação
        const { codAssinatura, valor } = request.body;
        // Processa o pagamento usando o serviço de pagamento
        const resultado = pagamentoService.processarPagamento(codAssinatura, valor);
        // Retorna o resultado do processamento do pagamento
        return resultado;
    });

    // Define a rota GET para '/totalfaturado'
    // Esta rota será usada para calcular o total faturado
    fastify.get('/totalfaturado', async (request, reply) => {
        // Calcula o total faturado usando o serviço de pagamento
        const total = pagamentoService.calcularTotalFaturado();
        // Retorna o total faturado
        return total;
    });
}
