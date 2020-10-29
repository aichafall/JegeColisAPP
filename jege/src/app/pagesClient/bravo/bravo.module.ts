import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BravoPageRoutingModule } from './bravo-routing.module';

import { BravoPage } from './bravo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BravoPageRoutingModule
  ],
  declarations: [BravoPage]
})
export class BravoPageModule {}
