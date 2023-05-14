/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';


import { AppController } from './app.controller';
import { AppService } from './app.service';

import { PeliculasController } from './peliculas/peliculas.controller';
import { PeliculasService } from './peliculas/peliculas.services';

@Module({
  imports: [ ServeStaticModule.forRoot({ rootPath: join(__dirname, '..', 'client') }),],
  controllers: [AppController, PeliculasController],
  providers: [AppService, PeliculasService],
})
export class AppModule {}
