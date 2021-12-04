import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleMusicoPageRoutingModule } from './detalle-musico-routing.module';

import { DetalleMusicoPage } from './detalle-musico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleMusicoPageRoutingModule,
    ReactiveFormsModule //agregado
  ],
  declarations: [DetalleMusicoPage]
})
export class DetalleMusicoPageModule {}
