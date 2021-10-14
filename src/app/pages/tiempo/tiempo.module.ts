import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TiempoPageRoutingModule } from './tiempo-routing.module';

import { TiempoPage } from './tiempo.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TiempoPageRoutingModule,
    ComponentsModule, //aqui llamamos a todos los componentes
  ],
  declarations: [TiempoPage]
})
export class TiempoPageModule {}
