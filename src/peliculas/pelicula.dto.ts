/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsNumber, IsString,  } from "class-validator";

export class PeliculaDto{

    
    @IsString()
    @IsNotEmpty()
    readonly titulo:string;

    @IsString()
    @IsNotEmpty()
    readonly actores:string[];

    @IsString()
    @IsNotEmpty()
    readonly generos:string[];

    @IsString()
    @IsNotEmpty()
    readonly sinopsis:string;

    @IsString()
    @IsNotEmpty()
    readonly imagen:string;

    @IsNumber()
    @IsNotEmpty()
    readonly duracion:number;

    @IsNumber()
    @IsNotEmpty()
    readonly fecha:number;
}