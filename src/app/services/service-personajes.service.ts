import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ //servicio encargado de injectar datos a la app
  providedIn: 'root'
})
export class ServicePersonajesService {

  urlBase: string;

  constructor(private http: HttpClient) { 
    this.urlBase = 'https://rickandmortyapi.com/api/character/'
  }

  obtenerListadoPersonajes() {
    return this.http.get<any>(`${this.urlBase}`)
  }

}
