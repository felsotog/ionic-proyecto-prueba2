import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConversorDivisaPage } from './conversor-divisa.page';

const routes: Routes = [
  {
    path: '',
    component: ConversorDivisaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConversorDivisaPageRoutingModule {}
