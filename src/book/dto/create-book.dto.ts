import { IsString } from "class-validator";



export class CreateBookDto {


@IsString()
name:string;

@IsString()
author:string

@IsString()
price:string



@IsString()
categories:string;


}