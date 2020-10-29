import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerifyaccPageRoutingModule } from './verifyacc-routing.module';

import { VerifyaccPage } from './verifyacc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerifyaccPageRoutingModule
  ],
  declarations: [VerifyaccPage]
})
export class VerifyaccPageModule {}
