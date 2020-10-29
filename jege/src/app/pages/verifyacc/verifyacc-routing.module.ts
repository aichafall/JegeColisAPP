import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerifyaccPage } from './verifyacc.page';

const routes: Routes = [
  {
    path: '',
    component: VerifyaccPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerifyaccPageRoutingModule {}
