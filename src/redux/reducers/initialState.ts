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
    isActive: boolean
}
export interface IUser {
    id: string
    email: string
    password: string
    firstName: string
    lastName: any
    accessToken: string
    address: any
    createdAt: string
    updatedAt: string
}
export type SignUp = Pick<IUser, 'email' | 'firstName' | 'password'>

export interface IUserState {
    user: any | null,
    token: string,
    isAuth: boolean
}