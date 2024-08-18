// Simulação de dados estáticos para assinaturas
let assinaturas = [
    { 
        codigo: 1, 
        codCli: 1, 
        codApp: 1, 
        inicioVigencia: new Date(), 
        fimVigencia: new Date(new Date().setFullYear(new Date().getFullYear() + 1)), 
        status: 'ATIVA' 
    },
    { 
        codigo: 2, 
        codCli: 1, 
        codApp: 2, 
        inicioVigencia: new Date(), 
        fimVigencia: new Date(new Date().setFullYear(new Date().getFullYear() + 1)), 
        status: 'CANCELADA' 
    },
    { 
        codigo: 3, 
        codCli: 2, 
        codApp: 3, 
        inicioVigencia: new Date(), 
        fimVigencia: new Date(new Date().setFullYear(new Date().getFullYear() + 1)), 
        status: 'ATIVA' 
    }
];

/**
 * Função para listar assinaturas válidas
 * Filtra as assinaturas para retornar apenas aquelas com status 'ATIVA'
 * @returns {Array} - Lista de assinaturas com status 'ATIVA'
 */
function listarAssinaturasValidas() {
    // Filtra a lista de assinaturas para obter apenas aquelas com status 'ATIVA'
    return assinaturas.filter(assinatura => assinatura.status === 'ATIVA');
}

// Exporta a função listarAssinaturasValidas para uso em outros arquivos
export { listarAssinaturasValidas };
