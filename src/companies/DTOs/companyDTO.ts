import { IsString } from "class-validator";

export class CreateCompanyDTO{
    @IsString()
    title:string
}