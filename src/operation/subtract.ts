import { BaseOperation } from "./base-operation";

export class Subtract extends BaseOperation {
    execute(numbers1: number[], numbers2?: number[]): number {
        const sum1 = numbers1.reduce((acc, curr) => acc - curr, 0);
        const sum2 = numbers2 ? numbers2.reduce((acc, curr) => acc - curr, 0) : 0;
        return sum1 - sum2;
    }
}
