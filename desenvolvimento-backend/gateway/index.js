import express from 'express';
import axios from 'axios';

// Inicializa a aplicação Express
const app = express();
app.use(express.json());

// Roteamento para o serviço de cadastro
app.use('/servcad', async (req, res) => {
    try {
        const response = await axios({
            method: req.method,
            url: `http://localhost:3001${req.url}`,
            data: req.body,
            headers: req.headers
        });
        res.status(response.status).send(response.data);
    } catch (error) {
        res.status(error.response ? error.response.status : 500).send(error.message);
    }
});

// Roteamento para o serviço de pagamento
app.use('/servpag', async (req, res) => {
    try {
        const response = await axios({
            method: req.method,
            url: `http://localhost:3002${req.url}`,
            data: req.body,
            headers: req.headers
        });
        res.status(response.status).send(response.data);
    } catch (error) {
        res.status(error.response ? error.response.status : 500).send(error.message);
    }
});

// Roteamento para o serviço de assinaturas válidas
app.use('/servass', async (req, res) => {
    try {
        const response = await axios({
            method: req.method,
            url: `http://localhost:3003${req.url}`,
            data: req.body,
            headers: req.headers
        });
        res.status(response.status).send(response.data);
    } catch (error) {
        res.status(error.response ? error.response.status : 500).send(error.message);
    }
});

// Inicializa o servidor
app.listen(3000, () => {
    console.log('API Gateway rodando em http://localhost:3000');
});
