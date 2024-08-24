const crypto = require('crypto');

// Dados para cifrar
const key = Buffer.from('240B31B44A27BEC5062B3A74C63271A4', 'hex');
const iv = crypto.randomBytes(16); // Gere um IV aleatório
const textToEncrypt = 'Bem-vindo ao futuro, PUCRS!';

// Configuração do cifrador
const cipher = crypto.createCipheriv('aes-128-cbc', key, iv);
cipher.setAutoPadding(true);

// Cifra o texto
let encryptedText = cipher.update(textToEncrypt, 'utf8', 'hex');
encryptedText += cipher.final('hex');

// Exibe o texto cifrado
console.log('Texto cifrado:', encryptedText);
console.log('IV:', iv.toString('hex')); // Exibe o IV gerado
