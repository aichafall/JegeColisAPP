import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItinerairePageRoutingModule } from './itineraire-routing.module';

import { ItinerairePage } from './itineraire.page';

import { HereMapComponent } from 'src/app/here-map/here-map.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItinerairePageRoutingModule
  ],
  declarations: [ItinerairePage, HereMapComponent],
  exports: [HereMapComponent]
})
export class ItinerairePageModule {}
