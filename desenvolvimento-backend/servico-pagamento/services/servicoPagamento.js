import { EventEmitter } from 'events';

// Simulação de dados para pagamentos
let pagamentos = [];

// Cria um novo EventEmitter para emitir e ouvir eventos relacionados a pagamentos
const pagamentoEmitter = new EventEmitter();

/**
 * Função para processar um pagamento
 * @param {number} codAssinatura - O código da assinatura relacionada ao pagamento
 * @param {number} valor - O valor pago
 * @returns {object} O pagamento processado
 */
function processarPagamento(codAssinatura, valor) {
    // Cria um objeto pagamento com os dados fornecidos e a data atual
    const pagamento = {
        codigo: pagamentos.length + 1, // Define um código único para o pagamento
        codAssinatura: codAssinatura,   // Código da assinatura relacionada
        valor: valor,                   // Valor do pagamento
        dataPagamento: new Date()       // Data em que o pagamento foi processado
    };

    // Adiciona o pagamento à lista de pagamentos
    pagamentos.push(pagamento);

    // Emite o evento 'PagamentoServicoCadastramento' com o pagamento processado
    pagamentoEmitter.emit('PagamentoServicoCadastramento', pagamento);
    // Emite o evento 'PagamentoServicoAssinaturaValida' com o pagamento processado
    pagamentoEmitter.emit('PagamentoServicoAssinaturaValida', pagamento);

    // Retorna o pagamento processado
    return pagamento;
}

/**
 * Função para calcular o total faturado
 * @returns {number} O total faturado
 */
function calcularTotalFaturado() {
    // Usa reduce para somar o valor de todos os pagamentos
    return pagamentos.reduce((total, pagamento) => total + pagamento.valor, 0);
}

// Exporta as funções e o EventEmitter para uso em outros arquivos
export {
    processarPagamento,
    calcularTotalFaturado,
    pagamentoEmitter
};
