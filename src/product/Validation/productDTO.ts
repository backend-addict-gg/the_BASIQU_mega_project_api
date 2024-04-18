import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class ProductDTO{
    @IsString()
    @IsNotEmpty()
    title: string
    @IsInt()
    @IsNotEmpty()
    price: number
    @IsString()
    @IsNotEmpty()
    description:string
}