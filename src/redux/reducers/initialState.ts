import { CardDto, IAddCardDto } from "~/types/card";


export interface IInitialState {
    post: IAddCardDto[],
    status: boolean
    totalPrice: number
    count: number
}
