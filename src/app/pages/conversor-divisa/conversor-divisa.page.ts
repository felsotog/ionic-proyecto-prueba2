import { Component, OnInit } from '@angular/core';
import { ServiceDivisaService } from 'src/app/services/service-divisa.service';

@Component({
  selector: 'app-conversor-divisa',
  templateUrl: './conversor-divisa.page.html',
  styleUrls: ['./conversor-divisa.page.scss'],
})
export class ConversorDivisaPage implements OnInit {

  pageTitle = 'Conversor De Divisas'; //Creamos la variable para llamarla del html y muestre el titulo
  
  //usd: number = 0;
  //eur: number = 0;
  fromValue: any;
  toValue: any;
  fromValue2: any;
  toValue2: any;
  Divisa: any;
  dolar: any;
  euro: any;

  constructor(private servicedivisaservice: ServiceDivisaService) { }

  ngOnInit() {
    this.divisaAll();
  }

  async divisaAll(){
    this.servicedivisaservice.getDivisa()
    .subscribe(
      respuesta => {
        this.Divisa = respuesta
        this.dolar = this.Divisa.dolar.valor
        this.euro = this.Divisa.euro.valor
        console.log(this.Divisa);
        console.log(this.dolar);
        console.log(this.euro);
      },
      err => console.log(err)
    )
  }

  calculateCurrencyOne() {
    this.toValue = this.fromValue * this.dolar;
  }

  calculateCurrencyTwo() {
    this.fromValue = this.toValue / this.dolar;
  }

  calculateCurrencyThree() {
    this.toValue2 = this.fromValue2 * this.euro;
  }

  calculateCurrencyFour() {
    this.fromValue2 = this.toValue2 / this.dolar;
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
