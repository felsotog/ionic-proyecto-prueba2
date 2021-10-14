import { Component, OnInit } from '@angular/core';
import { ServiceDivisaService } from 'src/app/services/service-divisa.service';

@Component({
  selector: 'app-conversor-divisa',
  templateUrl: './conversor-divisa.page.html',
  styleUrls: ['./conversor-divisa.page.scss'],
})
export class ConversorDivisaPage implements OnInit {

  pageTitle = 'Conversor De Divisas'; //Creamos la variable para llamarla del html y muestre el titulo
  
  usd: number = 0;
  eur: number = 0;
  Divisa: any;

  constructor(private servicedivisaservice: ServiceDivisaService) { }

  ngOnInit() {
    this.divisaAll();
  }

  async divisaAll(){
    this.servicedivisaservice.getDivisa()
    .subscribe(
      respuesta => {
        this.Divisa = respuesta
        console.log(this.Divisa);
      },
      err => console.log(err)
    )
  }

  /*
  async divisaDolar(){
    this.servicedivisaservice.getDivisa('dolar')
    .subscribe(
      respuesta => {
        this.divisaUSD = respuesta
        console.log(this.divisaUSD);
      },
      err => console.log(err)
    )
  }

  async divisaEuro(){
    this.servicedivisaservice.getDivisa('euro')
    .subscribe(
      respuesta => {
        this.divisaEUR = respuesta
        console.log(this.divisaEUR);
      },
      err => console.log(err)
    )
  }
  */
}
