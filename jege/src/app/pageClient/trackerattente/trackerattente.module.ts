import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrackerattentePageRoutingModule } from './trackerattente-routing.module';

import { TrackerattentePage } from './trackerattente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrackerattentePageRoutingModule
  ],
  declarations: [TrackerattentePage]
})
export class TrackerattentePageModule {}
