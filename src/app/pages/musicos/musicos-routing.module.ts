import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MusicosPage } from './musicos.page';

const routes: Routes = [
  {
    path: '',
    component: MusicosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MusicosPageRoutingModule {}
