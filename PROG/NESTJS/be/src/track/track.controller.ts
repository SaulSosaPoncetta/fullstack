import { Controller, Get, Param, Post, Body, Delete, Put, HttpCode, HttpStatus, Res, ParseIntPipe } from '@nestjs/common';
import { TrackService } from './track.service';
import { Track } from './track.interface';
import { TrackDto } from './trackDto.dto';


@Controller('track')
export class TrackController {
  constructor(private readonly trackService: TrackService) { }

//--------------------------------METODO QUE TRAE TODOS LOS DATOS DE LA BASE DE DATOS --------------------------------------------------
  @Get()
  getTracks(): Promise<Track[]> {
    return this.trackService.getTracks();
  }

//--------------------------------METODO QUE TRAE DATOS POR ID DE LA BASE DE DATOS --------------------------------------------------
  @Get(':id')
  getTrackById(@Param('id' , new ParseIntPipe({ errorHttpStatusCode: 
    HttpStatus.NOT_ACCEPTABLE }),
          ) 
          id: number,
        ): Promise<any> {
          return this.trackService.getTrackById(id);
}

//--------------------------------METODO QUE CREA/AGREGA DATOS DE LA BASE DE DATOS -------------------------------------------------- 
  @Post()
  createTrack(@Body() trackDto:TrackDto): Promise<any> { // crea una nueva pista  sacando el cuerpo desde la interface
    return this.trackService.createTrack(trackDto);
  }

  //--------------------------------METODO QUE BORRA  DATOS DE LA BASE DE DATOS --------------------------------------------------
  @Delete(':id')
  deleteTrackById(@Param('id') id: number): Promise<Track> {
    return this.trackService.deleteTrackById(id);
  }

 //--------------------------------METODO QUE HACE LA PETICION AL SERVICIO QUE VA A ACTUALIZAR  DATOS DE LA BASE DE DATOS --------------------------------------------------
  @Put(':id')
  @HttpCode(204)
  updateTrackById(@Param('id') id: number, @Body() body: Track) {
    return this.trackService.updateTrackById(id, body);
  }

}
