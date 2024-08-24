const crypto = require('crypto');

// Dados para cifrar
const key = Buffer.from('33A18467DB4AF474B051523A73DDA955', 'hex');
const iv = crypto.randomBytes(16); // Gera um IV aleatório
const textToEncrypt = 'Vitor Madalosso';

// Configuração do cifrador
const cipher = crypto.createCipheriv('aes-128-ctr', key, iv);

// Cifra o texto
let encryptedText = cipher.update(textToEncrypt, 'utf8', 'hex');
encryptedText += cipher.final('hex');

// Exibe o texto cifrado e o IV
console.log('Texto cifrado:', encryptedText);
console.log('IV:', iv.toString('hex')); // Exibe o IV gerado
