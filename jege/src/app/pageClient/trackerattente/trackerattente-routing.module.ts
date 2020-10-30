import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrackerattentePage } from './trackerattente.page';

const routes: Routes = [
  {
    path: '',
    component: TrackerattentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrackerattentePageRoutingModule {}
