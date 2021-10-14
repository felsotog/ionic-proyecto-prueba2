import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallePersonajePageRoutingModule } from './detalle-personaje-routing.module';

import { DetallePersonajePage } from './detalle-personaje.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallePersonajePageRoutingModule,
    ComponentsModule, //aqui llamamos a todos los componentes
  ],
  declarations: [DetallePersonajePage]
})
export class DetallePersonajePageModule {}
