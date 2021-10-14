import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceDivisaService {

  URL: string;

  constructor(private http: HttpClient) { 
    this.URL = 'https://mindicador.cl/api/'
  }

  getDivisa(){
    return this.http.get(`${this.URL}`)
  }

}
