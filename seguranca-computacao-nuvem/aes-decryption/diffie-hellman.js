const crypto = require('crypto');

// Dados fornecidos
const p = BigInt('1041607122029938459843911326429539139964006065005940226363139');
const g = BigInt(10);
const A = BigInt('105008283869277434967871522668292359874644989537271965222162');

// Gerar um valor aleatório `b` com pelo menos 40 dígitos e menor que `p`
function generateRandomBigInt(bits) {
    const bytes = Math.ceil(bits / 8);
    const randomBytes = crypto.randomBytes(bytes);
    let randomBigInt = BigInt('0x' + randomBytes.toString('hex'));
    randomBigInt = randomBigInt % (p - 1n); // Garantir que o valor seja menor que p
    return randomBigInt;
}

const b = generateRandomBigInt(320); // Aproximadamente 40 dígitos

// Verificar se o valor de b é válido
if (b >= p) {
    throw new Error('Valor de b deve ser menor que p');
}

// Função para calcular exponenciação modular
function modPow(base, exp, mod) {
    let result = 1n;
    base = base % mod;
    while (exp > 0n) {
        if (exp % 2n === 1n) { // Se exp for ímpar
            result = (result * base) % mod;
        }
        exp = exp >> 1n; // Divide exp por 2
        base = (base * base) % mod;
    }
    return result;
}

// Tarefa 2.1: Calcular a chave pública de Bob `B = g^b mod p`
const B = modPow(g, b, p);

// Tarefa 2.2: Calcular o valor de `v = A^b mod p`
const v = modPow(A, b, p);

// Tarefa 2.3: Gerar a chave `k` utilizando SHA-256 e pegar os 128 primeiros bits
const hash = crypto.createHash('sha256').update(v.toString()).digest('hex');
const k = hash.slice(0, 32); // Pegando os primeiros 128 bits (32 caracteres hexadecimais)

// Exibir os resultados
console.log('Valor aleatório b:', b.toString());
console.log('Chave pública de Bob B:', B.toString());
console.log('Valor de v:', v.toString());
console.log('Chave k (128 bits):', k);

// 537771947111686106506058615669571180270168052864543183659311

// ea69c427eebbec1bdbbf40c9053382dc4ae88517b5040fb88bca134a1f549f5b