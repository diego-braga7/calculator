import express, { Request, Response } from "express";
import { Sum } from "./operation/sum";
import { Subtract } from "./operation/subtract";
import { FactoryOperation } from "./factory-operation";
import { BaseOperation } from "./operation/base-operation";
import { Multiply } from "./operation/multiply";
import { Divide } from "./operation/divide";

const app = express();
const port = 3000;

app.use(express.json());

app.post("/add", (req: Request, res: Response) => {

    const toolCalls: string[] | undefined = req.body.message.toolCalls;

    if (toolCalls === undefined || !toolCalls) {
        return;
    }
    const operation = new Sum();

    res.json(prepareForFactoryOperation(operation, toolCalls));
});



app.post("/subtract", (req: Request, res: Response) => {
    const toolCalls: string[] | undefined = req.body.message.toolCalls;

    if (toolCalls === undefined || !toolCalls) {
        return;
    }
    const operation = new Subtract();

    res.json(prepareForFactoryOperation(operation, toolCalls));
});

app.post("/multiply", (req: Request, res: Response) => {
    const toolCalls: string[] | undefined = req.body.message.toolCalls;

    if (toolCalls === undefined || !toolCalls) {
        return;
    }
    const operation = new Multiply();

    res.json(prepareForFactoryOperation(operation, toolCalls));
});

app.post("/divide", (req: Request, res: Response) => {
    const toolCalls: string[] | undefined = req.body.message.toolCalls;

    if (toolCalls === undefined || !toolCalls) {
        return;
    }
    const operation = new Divide();

    res.json(prepareForFactoryOperation(operation, toolCalls));
});

function prepareForFactoryOperation(operation: BaseOperation, toolCalls: string[]) {
    const factoryOperation = new FactoryOperation(operation);
    return factoryOperation.handle(toolCalls);;
}

app.listen(port, () => {
    console.log(`Calculator API listening at http://localhost:${port}`);
});
