import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrackerlivrePage } from './trackerlivre.page';

const routes: Routes = [
  {
    path: '',
    component: TrackerlivrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrackerlivrePageRoutingModule {}
