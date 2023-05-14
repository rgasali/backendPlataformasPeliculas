/* eslint-disable prettier/prettier */
import { PeliculasService } from "./peliculas.services";
import { Pelicula } from "./pelicula";
import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, Put } from "@nestjs/common";
import { PeliculaDto } from "./pelicula.dto";



@Controller('peliculas')
export class PeliculasController {
    constructor (private readonly peliculaService:PeliculasService){}

@Get() 
getPeliculas():Pelicula[]{
    return this.peliculaService.getPeliculas()
}

@Get(':titulo')
  getPeliculaByTitulo(
    @Param('titulo')
    titulo: string,
  ): Pelicula {
    return this.peliculaService.getPeliculaByTitulo(titulo);
}

/* @Get(':uuid')
  getPeliculaById(
    @Param('id',ParseUUIDPipe)
    id: string,
  ): Pelicula {
    return this.peliculaService.getPeliculaById(id);
} */


@Post()
postPelicula(@Body() PeliculaDto: PeliculaDto) {
  return this.peliculaService.createPelicula(PeliculaDto);

}

@Put(":titulo")
putPelicula(@Body()pelicula: PeliculaDto, @Param('titulo') titulo: string) :string {
  return this.peliculaService.updatePelicula(pelicula, titulo);
}



@Delete(":titulo")
  deletePelicula(@Param("titulo") titulo: string): boolean {
    return this.peliculaService.deletePelicula(titulo);
}
}
