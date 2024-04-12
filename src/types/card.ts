import { CreateCommentDto } from "./comment";

export interface CardDto {
    id: number
    flashSales: string;
    best?: string
    logo: string;
    prices: string[];
    star: number;
    title: string;
    comments: CreateCommentDto[]
    count: number
}