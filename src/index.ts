import express, { Request, Response } from 'express';
import { sum } from './sum';
import { subtract } from './subtract';
import { multiply } from './multiply';
import { divide } from './divide';

const app = express();
const port = 3000;

// Middleware para parsear JSON
app.use(express.json());

// Rota para adição
app.post('/add', (req: Request, res: Response) => {
    const { num1, num2 } = req.body;
    const result = sum(num1, num2);
    res.json({ result });
});

// Rota para subtração
app.post('/subtract', (req: Request, res: Response) => {
    const { num1, num2 } = req.body;
    const result = subtract(num1, num2);
    res.json({ result });
});

// Rota para multiplicação
app.post('/multiply', (req: Request, res: Response) => {
    const { num1, num2 } = req.body;
    const result = multiply(num1, num2);
    res.json({ result });
});

// Rota para divisão
app.post('/divide', (req: Request, res: Response) => {
    const { num1, num2 } = req.body;
    const result = divide(num1, num2);
    res.json({ result });
});

app.listen(port, () => {
    console.log(`Calculator API listening at http://localhost:${port}`);
});
