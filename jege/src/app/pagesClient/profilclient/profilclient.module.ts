import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilclientPageRoutingModule } from './profilclient-routing.module';

import { ProfilclientPage } from './profilclient.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilclientPageRoutingModule
  ],
  declarations: [ProfilclientPage]
})
export class ProfilclientPageModule {}
