import { CardDto, IAddCardDto, IAddFavoriteDto } from "~/types/card";


export interface IInitialState {
    post: IAddCardDto[],
    status: boolean
    totalPrice: number
    count: number
}

export interface IFavoriteState {
    favoriteItem: IAddFavoriteDto[],
    status: boolean
    count: number
}
