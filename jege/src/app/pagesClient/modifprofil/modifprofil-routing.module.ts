import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModifprofilPage } from './modifprofil.page';

const routes: Routes = [
  {
    path: '',
    component: ModifprofilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModifprofilPageRoutingModule {}
