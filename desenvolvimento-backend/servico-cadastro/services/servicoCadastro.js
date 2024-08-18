// Dados iniciais dos clientes
let clientes = [
    { codigo: 1, nome: 'Vitor Madalosso', email: 'vitor.madalosso@edu.pucrs.br' },
    { codigo: 2, nome: 'Bernardo Copstein', email: 'professor@edu.pucrs.br' },
    { codigo: 3, nome: 'Julio Machado', email: 'professor@edu.pucrs.br' }
];

// Dados iniciais dos aplicativos
let aplicativos = [
    { codigo: 1, nome: 'Netflix', custoMensal: 10.99 },
    { codigo: 2, nome: 'HBO Max', custoMensal: 15.99 },
    { codigo: 3, nome: 'Spotify', custoMensal: 5.99 }
];

// Dados iniciais das assinaturas
let assinaturas = [
    { codigo: 1, codCli: 1, codApp: 1, inicioVigencia: new Date(), fimVigencia: new Date(new Date().setFullYear(new Date().getFullYear() + 1)), status: 'ATIVA' },
    { codigo: 2, codCli: 1, codApp: 2, inicioVigencia: new Date(), fimVigencia: new Date(new Date().setFullYear(new Date().getFullYear() + 1)), status: 'CANCELADA' },
    { codigo: 3, codCli: 2, codApp: 3, inicioVigencia: new Date(), fimVigencia: new Date(new Date().setFullYear(new Date().getFullYear() + 1)), status: 'ATIVA' }
];

// Função para listar todos os clientes
function listarClientes() {
    return clientes;
}

// Função para listar todos os aplicativos
function listarAplicativos() {
    return aplicativos;
}

// Função para criar uma nova assinatura
function criarAssinatura(codCliente, codAplicativo) {
    // Definir a data de início e fim da vigência da assinatura
    const inicioVigencia = new Date();
    const fimVigencia = new Date(inicioVigencia);
    fimVigencia.setFullYear(inicioVigencia.getFullYear() + 1);
    
    // Criar um objeto de assinatura
    const assinatura = {
        codigo: assinaturas.length + 1, // Novo código para a assinatura
        codCli: codCliente,
        codApp: codAplicativo,
        inicioVigencia: inicioVigencia,
        fimVigencia: fimVigencia,
        status: 'ATIVA'
    };

    // Adicionar a nova assinatura ao array de assinaturas
    assinaturas.push(assinatura);
    // Retornar a assinatura criada
    return assinatura;
}

// Função para atualizar o custo mensal de um aplicativo
function atualizarCustoAplicativo(idAplicativo, custo) {
    // Encontrar o aplicativo pelo ID fornecido
    const aplicativo = aplicativos.find(app => app.codigo == idAplicativo);
    if (aplicativo) {
        // Atualizar o custo mensal do aplicativo
        aplicativo.custoMensal = custo;
        // Retornar o aplicativo atualizado
        return aplicativo;
    }
    // Retornar null se o aplicativo não for encontrado
    return null;
}

// Função para listar assinaturas com base no tipo fornecido
function listarAssinaturasPorTipo(tipo) {
    if (tipo === 'TODAS') {
        // Retornar todas as assinaturas
        return assinaturas;
    } else if (tipo === 'ATIVA' || tipo === 'CANCELADA') {
        // Filtrar assinaturas com base no status fornecido
        return assinaturas.filter(assinatura => assinatura.status === tipo);
    }
    // Retornar um array vazio se o tipo não for válido
    return [];
}

// Função para listar assinaturas de um cliente específico
function listarAssinaturasPorCliente(codcli) {
    // Filtrar assinaturas com base no código do cliente fornecido
    return assinaturas.filter(assinatura => assinatura.codCli == codcli);
}

// Função para listar assinaturas de um aplicativo específico
function listarAssinaturasPorAplicativo(codapp) {
    // Filtrar assinaturas com base no código do aplicativo fornecido
    return assinaturas.filter(assinatura => assinatura.codApp == codapp);
}

// Exportar as funções para que possam ser usadas em outros módulos
export {
    listarClientes,
    listarAplicativos,
    criarAssinatura,
    atualizarCustoAplicativo,
    listarAssinaturasPorTipo,
    listarAssinaturasPorCliente,
    listarAssinaturasPorAplicativo
};
