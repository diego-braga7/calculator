import express, { Request, Response } from "express";
import { Sum } from "./operation/sum";
import { Subtract } from "./operation/subtract";
import { FactoryOperation } from "./factory-operation";
import { BaseOperation } from "./operation/base-operation";
import { Multiply } from "./operation/multiply";
import { Divide } from "./operation/divide";
import authRoutes from './routes/auth';
import { authMiddleware } from "./middleware/authMiddleware";

const app = express();
const port = 3000;

app.use(express.json());
app.use('/auth', authRoutes);

app.post("/", authMiddleware,(req: Request, res: Response) => {

    const toolCalls: string[] | undefined = req.body.message.toolCalls;

    if (toolCalls === undefined || !toolCalls) {
        return;
    }

    res.json(prepareForFactoryOperation(toolCalls));
});



function prepareForFactoryOperation(toolCalls: string[]) {

    const factoryOperation = new FactoryOperation();
    return factoryOperation.handle(toolCalls);;
}

app.listen(port, () => {
    console.log(`Calculator API listening at http://localhost:${port}`);
});
