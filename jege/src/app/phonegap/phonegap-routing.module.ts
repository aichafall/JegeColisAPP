import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhonegapPage } from './phonegap.page';

const routes: Routes = [
  {
    path: '',
    component: PhonegapPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhonegapPageRoutingModule {}
