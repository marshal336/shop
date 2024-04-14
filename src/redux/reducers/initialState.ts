import { CardDto } from "~/types/card";


export interface IInitialState {
    post: CardDto[],
    status: boolean
    totalPrice: number
    count: number
}