import { BaseOperation } from "./operation/base-operation";
import { Divide } from "./operation/divide";
import { Multiply } from "./operation/multiply";
import { Percentage } from "./operation/percentege";
import { Subtract } from "./operation/subtract";
import { Sum } from "./operation/sum";

export class FactoryOperation {

    constructor() {

     }

     public handle(toolCalls : string[]){
        const finalResponse = toolCalls.map((toolCall: any) => {
            let id = toolCall.id;
            let argumets = toolCall.function.arguments;
            let num1 = argumets.num1;
            let num2 = argumets.num2;
            let textOperation = argumets.operation;

            const operation = this.getOperation(textOperation);
            const result = operation.execute(num1, num2);
            const resultObject = [
                {
                    toolCallId: id,
                    result: result,
                },
            ];
            const returnToVapi = {
                results: resultObject,
            };

            return returnToVapi;
        });

        return finalResponse[0];
     }

     private getOperation(operation: string) {
        switch (operation) {
            case "sum":
                return new Sum();
            case "subtract":
                return new Subtract();
            case "multiply":
                return new Multiply();
            case "divide":
                return new Divide();
            case "percentage":
                return new Percentage();    
            default:
                return new Sum();
        }	
    }
}