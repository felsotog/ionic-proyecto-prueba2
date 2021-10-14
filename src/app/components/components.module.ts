import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    HeaderComponent, //declaramos el componente
  ],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [ //aqui exportamos el componente para que salga
    HeaderComponent,
  ]
})
export class ComponentsModule { }
