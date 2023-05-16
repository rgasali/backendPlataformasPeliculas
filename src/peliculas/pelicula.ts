/* eslint-disable prettier/prettier */
export class Pelicula{

    id:string; 
    titulo:string; 
    actores:string[];
    generos:string[]; 
    sinopsis:string;
    imagen:string;
    duracion:number; 
    fecha:number;

    constructor(
     id:string, 
     titulo:string, 
     actores:string[],
     generos:string[], 
     sinopsis:string,
     imagen:string,
     duracion:number, 
     fecha:number 
    )
    {
       this.id=id; 
       this.titulo=titulo; 
       this.actores=actores;
       this.generos=generos; 
       this.sinopsis=sinopsis;
       this.imagen=imagen;
       this.duracion=duracion; 
       this.fecha=fecha;   
    }

/* 
    setId(nuevoId: string): void {
        this.id = nuevoId;
    }
     
    setTitulo(nuevoTitulo: string): void {
        this.titulo = nuevoTitulo;
    }
    setActores(nuevoActores: string[]): void {
        this.actores = nuevoActores;
    }
    setGeneros(nuevoGeneros: string[]): void {
        this.generos = nuevoGeneros;
    }
    setSinopsis(nuevoSinopsis: string): void {
        this.sinopsis = nuevoSinopsis;
    }
    setImagen(nuevoImagen: string): void {
        this.imagen = nuevoImagen;
    }
    setDuracion(nuevoDuracion: number): void {
        this.duracion = nuevoDuracion;
    }
    setFecha(nuevoFecha: number): void {
        this.fecha = nuevoFecha;
    }
*/

}