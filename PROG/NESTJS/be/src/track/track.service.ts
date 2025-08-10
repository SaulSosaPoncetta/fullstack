import { Injectable, NotFoundException } from '@nestjs/common';
import { Track } from './track.interface';
import { TrackDto } from './trackDto.dto';

const BASE_URL = 'http://localhost:3030/tracks/';

@Injectable()
export class TrackService {
  // ----------------------------------Metodo que ACTUALIZA POR ID datos en bases de datos --------------------------------------------
  async updateTrackById(id: number, body: Track): Promise<Track | undefined> {
    const isTrack: Track | undefined = await this.getTrackById(id);
    if (!isTrack || !Object.keys(isTrack).length) {
        console.warn(`El track de id ${id} no existe`)
      return;
      }
      const updateTrack = { ...body, id };
      console.log('Pista actualizada', updateTrack.title);
      const res = await fetch(BASE_URL + id, { method: 'PUT', headers: { 'Content-Type': 'application/json', }, body: JSON.stringify(updateTrack),
    });
    if (!res.ok) {
      console.log('no se pudo actualizar')
      return;
    }
    // const parsed = await res.json();
    // return parsed
  }

  //--------------------------------------Metodo que BORRA POR ID datos en base de datos--------------------------------------------------
  async deleteTrackById(id: number): Promise<Track> {
    const res = await fetch(BASE_URL + id, {
      method: 'DELETE',
    });
    const parsed = res.json();
    return parsed;
  }

  //--------------------------------------Metodo que CREA  datos en base de datos--------------------------------------------------
  async createTrack(track: TrackDto): Promise<Track> {
    const idn = await this.setId();
    //const newTrack={id,...track};
    const newTrack: Track = {
      id: idn,
      title: track.title,
      duration: track.duration,
      artist: track.artist,
    };
    const res = await fetch(BASE_URL, { method: 'POST', body: JSON.stringify(newTrack), headers: {'Content-Type': 'application/json',
                      //      ruta          metodo            cuerpo formato json               cabeceras o headers  
    },
    });
    const parsed = await res.json();
    return parsed;
  }

  //--------------------------------------Metodo que SETEA TODOS LOS  datos en base de datos POR ID--------------------------------------------------
  private async setId(): Promise<number> {
    const tracks = await this.getTracks();
    const id: number = tracks[tracks.length - 1].id + 1;
    //=tracks[2]
    return id; //4
  }

  //--------------------------------------Metodo que TRAE POR ID LOS  datos en base de datos--------------------------------------------------
  async getTrackById(id: number): Promise<Track | undefined> {
    const res = await fetch(BASE_URL + id);
    console.log ("Estado: " + res.status)

    //if (!res.ok){
    //  return undefined
    //}
    try {
      const parsed = await res.json();
      
     // if (Object.keys(parsed).length) return parsed;
    } catch (err) {
      console.log(err)
      return undefined;
      //throw new NotFoundException('no se encontro el recurso');
    }
  }
  //--------------------------------------Metodo que TRAE TODOS LOS  datos en base de datos--------------------------------------------------
  async getTracks(): Promise<Track[]> {
    const res = await fetch(BASE_URL);
    const parsed = await res.json();
    return parsed;
  }

}
