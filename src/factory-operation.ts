import { BaseOperation } from "./operation/base-operation";

export class FactoryOperation {

    constructor(private operation: BaseOperation) {

     }

     public handle(toolCalls : string[]){
        const finalResponse = toolCalls.map((toolCall: any) => {
            let id = toolCall.id;
            let argumets = toolCall.function.arguments;
            let num1 = argumets.num1;
            let num2 = argumets.num2;

            const result = this.operation.execute(num1, num2);
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
}