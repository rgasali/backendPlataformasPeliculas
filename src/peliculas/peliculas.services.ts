/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from "@nestjs/common";
import {v4 as uuid} from 'uuid'
import { Pelicula } from "./pelicula";
import { PeliculaDto } from "./pelicula.dto";


@Injectable()
export class PeliculasService{

    private peliculas:Pelicula[]=[
      {
      "id":uuid(),
      "titulo":"Posesión infernal: El despertar ",
      "actores":["Lily Sullivan","Alyssa Sutherland","Morgan Davies","Gabrielle Echols","Nell Fisher"],
      "generos":["terror","suspenso"],
      "sinopsis":"Historia de dos hermanas separadas cuyo reencuentro se ve interrumpido por el surgimiento de demonios poseedores de carne, empujándolos a una batalla por la supervivencia mientras se enfrentan a la versión de familia más aterradora que se pueda imaginar. Secuela de la trilgía original de 'Evil Dead'.",
      "imagen":"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/mIBCtPvKZQlxubxKMeViO2UrP3q.jpg",
      "duracion":196,
      "fecha":2023
    },
    {
      "id":uuid(),
      "titulo":"Red",
      "actores":["Beau Fowler","Ian Reddington","Jennifer Lim","Andrew Leung"],
      "generos":["accion","suspenso"],
      "sinopsis":"Cuando un ex soldado se despierta en un baño de hielo y descubre que le falta un riñón y, lo que es peor, su hija, debe abrirse camino a través de la 'Guarida de recolección de órganos' para encontrarla antes de que sea demasiado tarde.",
      "imagen":"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tVhmmgObWBALnlVDpbrR99Rbsl.jpg",
      "duracion":180,
      "fecha":2020
    },
    {
      "id":uuid(),
      "titulo":"El padrino",
      "actores":["Marlon Brando","Al Pacino","Robert Duvall","Diane Keaton"],
      "generos":["drama","crimen"],
      "sinopsis":"Don Vito Corleone, conocido dentro de los círculos del hampa como 'El Padrino', es el patriarca de una de las cinco familias que ejercen el mando de la Cosa Nostra en Nueva York en los años cuarenta. Don Corleone tiene cuatro hijos: una chica, Connie, y tres varones; Sonny, Michael y Fredo. Cuando el Padrino reclina intervenir en el negocio de estupefacientes, empieza una cruenta lucha de violentos episodios entre las distintas familias del crimen organizado.",
      "imagen":"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ApiEfzSkrqS4m1L5a2GwWXzIiAs.jpg",
      "duracion":175,
      "fecha":1972
    },
    {
      "id":uuid(),
      "titulo":"La lista de Schindler",
      "actores":["Liam Neeson","Ben Kingsley","Ralph Fiennes","Caroline Goodall","Jonathan Sagall"],
      "generos":["drama","historica","belica"],
      "sinopsis":"Oskar Schindler, un hombre de enorme astucia y talento para las relaciones públicas, organiza un ambicioso plan para ganarse la simpatía de los nazis. Después de la invasión de Polonia por los alemanes, consigue, gracias a sus relaciones con los nazis, la propiedad de una fábrica de Cracovia. Allí emplea a cientos de operarios judíos, cuya explotación le hace prosperar rápidamente. Su gerente, también judío, es el verdadero director en la sombra, pues Schindler no tiene el menor conocimiento industrial.",
      "imagen":"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/3Ho0pXsnMxpGJWqdOi0KDNdaTkT.jpg",
      "duracion":195,
      "fecha":1993
    },
    {
      "id":uuid(),
      "titulo":"Pulp Fiction",
      "actores":["John Travolta","Samuel L. Jackson","Uma Thurman","Bruce Willis","Harvey Keitel"],
      "generos":["suspenso","crimen"],
      "sinopsis":"Jules y Vincent, dos asesinos a sueldo con muy pocas luces, trabajan para Marsellus Wallace. Vincent le confiesa a Jules que Marsellus le ha pedido que cuide de Mia, su mujer. Jules le recomienda prudencia porque es muy peligroso sobrepasarse con la novia del jefe. Cuando llega la hora de trabajar, ambos deben ponerse manos a la obra. Su misión: recuperar un misterioso maletín.",
      "imagen":"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/hNcQAuquJxTxl2fJFs1R42DrWcf.jpg",
      "duracion":154,
      "fecha":1994
    },
    {
      "id":uuid(),
      "titulo":"American History X",
      "actores":["Edward Norton","Edward Furlong","Beverly D'Angelo"],
      "generos":["drama"],
      "sinopsis":"Derek Vinyard, es el líder de un grupo neonazi. La vida de Derek transcurre entre las acciones de su grupo (asaltar tiendas de inmigrantes, dar palizas a afroamericanos...) y su vida familiar: una madre enferma, una hermana, de ideas opuestas, y un hermano menor que lo idolatra. Derek es condenado por asesinato. Cuando sale de prisión, regresa a casa, dispuesto a empezar una nueva vida, pero descubre que su hermano prosigue el camino que le metió en la cárcel.",
      "imagen":"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/h2cDqHvnZkycBJKoF7WhcQ2MX1V.jpg",
      "duracion":119,
      "fecha":1998
    },
    {
      "id":uuid(),
      "titulo":"origen",
      "actores":["Leonardo DiCaprio","Joseph Gordon-Levitt","Ken Watanabe","Tom Hardy","Elliot Page","Cillian Murphy"],
      "generos":["accion","ciencia ficcion","aventura"],
      "sinopsis":"Dom Cobb es un ladrón hábil, el mejor de todos, especializado en el peligroso arte de extracción: el robo de secretos valiosos desde las profundidades del subconsciente durante el estado de sueño cuando la mente está más vulnerable. Esta habilidad excepcional de Cobb le ha hecho un jugador codiciado en el traicionero nuevo mundo de espionaje corporativo, pero al mismo tiempo, le ha convertido en un fugitivo internacional y ha tenido que sacrificar todo que le importaba. Ahora a Cobb se le ofrece una oportunidad para redimirse. Con un último trabajo podría recuperar su vida anterior, pero solamente si logra lo imposible.",
      "imagen":"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tXQvtRWfkUUnWJAn2tN3jERIUG.jpg",
      "duracion":158,
      "fecha":2010
    },
    {
      "id":uuid(),
      "titulo":"matrix",
      "actores":["Keanu Reeves","Laurence Fishburne","Carrie-Anne Moss","Hugo Weaving"],
      "generos":["accion","ciencia ficcion"],
      "sinopsis":"Thomas Anderson lleva una doble vida: por el día es programador en una importante empresa de software, y por la noche un hacker informático llamado Neo. Su vida no volverá a ser igual cuando unos misteriosos personajes le inviten a descubrir la respuesta a la pregunta que no le deja dormir: ¿qué es Matrix?",
      "imagen":"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/qK76PKQLd6zlMn0u83Ej9YQOqPL.jpg",
      "duracion":138,
      "fecha":1999
    },
    {
      "id":uuid(),
      "titulo":"Gladiador",
      "actores":["Russell Crowe","Joaquin Phoenix","Connie Nielsen"],
      "generos":["accion","drama","aventura"],
      "sinopsis":"En el año 180, el Imperio Romano domina todo el mundo conocido. Tras una gran victoria sobre los bárbaros del norte, el anciano emperador Marco Aurelio decide transferir el poder a Máximo, bravo general de sus ejércitos y hombre de inquebrantable lealtad al imperio. Pero su hijo Cómodo, que aspiraba al trono, no lo acepta y trata de asesinar a Máximo.",
      "imagen":"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/90QFOG5zSN4cbrIVs4DL4ePAuA5.jpg",
      "duracion":155,
      "fecha":2000
    }  ];
  

    

    getPeliculas():Pelicula[]{
        return this.peliculas;
    }
    
    getPeliculaByTitulo(titulo: string): Pelicula {
        const pelicula = this.peliculas.find((pelicula) => pelicula.titulo === titulo);
    
        if (!pelicula) {
          // devolver una exception si no encuentra la pista
          throw new NotFoundException(`no se encontro la pelicula ${titulo}`);
        }
    
        return pelicula;
    }
    
    createPelicula(PeliculaDto: PeliculaDto) {
      const np:Pelicula={
        id:uuid(),
        ...PeliculaDto
      }
      
        /* const newPelicula: Pelicula = new Pelicula(
          uuid(),
          PeliculaDto.titulo,
          PeliculaDto.actores,
          PeliculaDto.generos,
          PeliculaDto.imagen,
          PeliculaDto.sinopsis,
          PeliculaDto.duracion,
          PeliculaDto.fecha
        ); */
        
        const peliculaRepetida=this.peliculas.find((e)=>
        e.titulo=== np.titulo)

        if(peliculaRepetida){
          throw new NotFoundException(`Esa pelicula ya existe`)
        }
    
        this.peliculas.push(np);
            
        
      }

      updatePelicula(nuevaPelicula: any, titulo: string): string{
    
        const index = this.peliculas.findIndex(pelicula => pelicula.titulo == titulo);
    
        if (index != -1) {
          const peliculaExistente = this.peliculas[index];
    
          //peliculaExistente.setId(nuevaPelicula.id);
          peliculaExistente.titulo=nuevaPelicula.titulo;
          peliculaExistente.actores=nuevaPelicula.actores;
          peliculaExistente.generos=nuevaPelicula.generos;
          peliculaExistente.sinopsis=nuevaPelicula.sinopsis;
          peliculaExistente.imagen=nuevaPelicula.imagen;
          peliculaExistente.duracion=nuevaPelicula.duracion;
          peliculaExistente.fecha=nuevaPelicula.fecha;
    
          return "ok"
        } else {
          return "404"
        }
    
      }




      deletePelicula(titulo: string): boolean {
        const pos = this.peliculas.findIndex((e) => {
          return e.titulo == titulo;
        });
    
        if (pos != -1) {
          this.peliculas.splice(pos, 1);
          return true;
        }
    
        return false;
      }
    }



