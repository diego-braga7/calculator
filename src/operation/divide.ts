import { BaseOperation } from "./base-operation";

export class Divide extends BaseOperation {
    execute(numbers1: number[], numbers2?: number[]): number {
        // Divide os números da primeira lista acumulativamente.
        const initialDivision = numbers1.reduce((acc, curr) => acc / curr);

        // Se uma segunda lista foi fornecida, divide o resultado pelo produto dos números.
        if (numbers2) {
            const productOfSecondList = numbers2.reduce((acc, curr) => acc * curr, 1);
            return initialDivision / productOfSecondList;
        }

        return initialDivision;
    }
}
