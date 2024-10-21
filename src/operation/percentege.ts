import { BaseOperation } from "./base-operation";

export class Percentage extends BaseOperation {
    execute(numbers1: number[], numbers2?: number[]): number {
        const baseValue = numbers1.reduce((acc, curr) => acc * curr, 1); 
        const percentage = numbers2 ? numbers2.reduce((acc, curr) => acc * curr, 1) : 100; 
        return (baseValue * percentage) / 100;
    }
}
