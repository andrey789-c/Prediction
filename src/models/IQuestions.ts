import { IOptions } from "./IOptions";

export interface IQuestion {
    id: number;
    name: string;
    question: string;
    options: IOptions[];
}