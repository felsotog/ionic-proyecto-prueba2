import { Component, OnInit } from '@angular/core';
import { ServiceTiempoService } from 'src/app/services/service-tiempo.service';

@Component({
  selector: 'app-tiempo',
  templateUrl: './tiempo.page.html',
  styleUrls: ['./tiempo.page.scss'],
})
export class TiempoPage implements OnInit {

  pageTitle = 'Tiempo'; //Creamos la variable para llamarla del html y muestre el titulo
  weather: any;

  constructor(private servicetiemposervice: ServiceTiempoService) { }

  ngOnInit() {
    this.servicetiemposervice.getWeather('Santiago','cl')
    .subscribe(
      respuesta => {
        this.weather = respuesta
        console.log(respuesta);
      },
      err => console.log(err)
    )
  }

}
