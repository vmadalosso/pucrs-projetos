const crypto = require('crypto');

// Dados fornecidos
const key = Buffer.from('240B31B44A27BEC5062B3A74C63271A4', 'hex');
const iv = Buffer.from('C4AB0DF3D808D72AAADBC68206483B18', 'hex');
const encryptedText = Buffer.from('EF794476D605765572683CE849FBD4555CE8EC1382019662E277F31B8035E285787C1DA9D2CC5B3441F5CB900C41BA70902A932209C3966B83FB4387ABBC95E0', 'hex');

// Configuração do decifrador
const decipher = crypto.createDecipheriv('aes-128-cbc', key, iv);
decipher.setAutoPadding(true); // Certifica-se de que o padding PKCS7 será aplicado

// Decifragem
let decryptedText = decipher.update(encryptedText, 'hex', 'utf8');
decryptedText += decipher.final('utf8');

// Exibe o texto claro
console.log('Texto claro:', decryptedText);
