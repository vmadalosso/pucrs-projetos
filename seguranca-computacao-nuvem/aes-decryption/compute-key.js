const crypto = require('crypto');

// Suponha que o valor de v seja 123456789 (substitua pelo valor real de v)
const v = '341223423910180895345248688922272539600047936507135986615950';

// Calcula o hash SHA256
const hash = crypto.createHash('sha256').update(v).digest('hex');

// Pegue os primeiros 128 bits (16 bytes) do hash
const k = hash.slice(0, 32); // 32 caracteres hexadecimais correspondem a 128 bits

console.log('Chave k:', k);
