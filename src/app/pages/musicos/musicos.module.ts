import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MusicosPageRoutingModule } from './musicos-routing.module';

import { MusicosPage } from './musicos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MusicosPageRoutingModule,
    ReactiveFormsModule //agregado
  ],
  declarations: [MusicosPage]
})
export class MusicosPageModule {}
