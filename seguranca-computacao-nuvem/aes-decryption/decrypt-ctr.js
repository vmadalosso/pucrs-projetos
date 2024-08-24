const crypto = require('crypto');

// Dados fornecidos
const key = Buffer.from('33A18467DB4AF474B051523A73DDA955', 'hex');
const iv = Buffer.from('93679c0872e047d0a7d9a5582a47069d', 'hex');
const encryptedText = Buffer.from('87240aac8e7e5ee0fd9e11f28e5348', 'hex');

// Configuração do decifrador
const decipher = crypto.createDecipheriv('aes-128-ctr', key, iv);
decipher.setAutoPadding(true); // Certifica-se de que o padding PKCS7 será aplicado

// Decifragem
let decryptedText = decipher.update(encryptedText, 'hex', 'utf8');
decryptedText += decipher.final('utf8');

// Exibe o texto claro
console.log('Texto claro:', decryptedText);
