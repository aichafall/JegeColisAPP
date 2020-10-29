import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BravoPage } from './bravo.page';

const routes: Routes = [
  {
    path: '',
    component: BravoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BravoPageRoutingModule {}
