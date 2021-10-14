import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ServicePersonajesService } from 'src/app/services/service-personajes.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.page.html',
  styleUrls: ['./personajes.page.scss'],
})
export class PersonajesPage implements OnInit {

  pageTitle = 'Personajes'; //Creamos la variable para llamarla del html y muestre el titulo

  personajes: any = [];

  constructor(private servicepersonajeservice: ServicePersonajesService) { }

  //este metodo se carga apenas la pag sea cargada
  ngOnInit() {
    this.personajesAll();
    /*
    this.http.get<any>('https://rickandmortyapi.com/api/character/')
      .subscribe(res =>{
        console.log(res);
        this.personajes = res.results;
      })*/
  }

  async personajesAll(){
    this.servicepersonajeservice.obtenerListadoPersonajes()
    .subscribe(
      respuesta => {
        this.personajes = respuesta.results;
        console.log(this.personajes);
      },
      err => console.log(err)
    )
  }

}
