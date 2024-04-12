import { CardDto } from "~/types/card";


export interface IInitialState {
    post: CardDto | null,
    status: boolean
    totalPrice: number
    count: number
}