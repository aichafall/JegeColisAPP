import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhonegapPageRoutingModule } from './phonegap-routing.module';

import { PhonegapPage } from './phonegap.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhonegapPageRoutingModule
  ],
  declarations: [PhonegapPage]
})
export class PhonegapPageModule {}
