import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleMusicoPage } from './detalle-musico.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleMusicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleMusicoPageRoutingModule {}
