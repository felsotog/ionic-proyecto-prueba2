import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonajesPageRoutingModule } from './personajes-routing.module';

import { PersonajesPage } from './personajes.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonajesPageRoutingModule,
    ComponentsModule, //aqui llamamos a todos los componentes
  ],
  declarations: [PersonajesPage]
})
export class PersonajesPageModule {}
