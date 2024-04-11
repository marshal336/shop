import { CreateCommentDto } from "./comment";

export interface CardDto {
    id: string
    flashSales: string;
    best?: string
    logo: string;
    prices: string[];
    star: number;
    title: string;
    comments: CreateCommentDto[]
}