import { CreateCommentDto } from "./comment";

export interface CardDto {
    id: number //
    flashSales: string;
    best?: string
    logo: string; //
    prices: string[];
    star: number;
    title: string;
    comments: CreateCommentDto[]
    count?: number
}
export interface IAddCardDto {
    id: number //
    logo: string; //
    prices: string;
    count: number
}

export interface IAddFavoriteDto{
    id: number 
    flashSales: string;
    best?: string
    logo: string 
    prices: string[];
    title: string;
}
