import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConversorDivisaPageRoutingModule } from './conversor-divisa-routing.module';

import { ConversorDivisaPage } from './conversor-divisa.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConversorDivisaPageRoutingModule,
    ComponentsModule, //aqui llamamos a todos los componentes
  ],
  declarations: [ConversorDivisaPage]
})
export class ConversorDivisaPageModule {}
