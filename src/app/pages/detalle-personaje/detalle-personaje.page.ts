import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-personaje',
  templateUrl: './detalle-personaje.page.html',
  styleUrls: ['./detalle-personaje.page.scss'],
})
export class DetallePersonajePage implements OnInit {

  perfilId: string;
  personaje;

  pageTitle = 'Detalles Del Personaje'; //Creamos la variable para llamarla del html y muestre el titulo

  constructor(private activateRoute: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.perfilId = this.activateRoute.snapshot.paramMap.get('id')
    this.http.get('https://rickandmortyapi.com/api/character/' + this.perfilId)
      .subscribe(res => this.personaje = res);
  }

}
