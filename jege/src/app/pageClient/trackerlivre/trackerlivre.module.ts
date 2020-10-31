import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrackerlivrePageRoutingModule } from './trackerlivre-routing.module';

import { TrackerlivrePage } from './trackerlivre.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrackerlivrePageRoutingModule
  ],
  declarations: [TrackerlivrePage]
})
export class TrackerlivrePageModule {}
