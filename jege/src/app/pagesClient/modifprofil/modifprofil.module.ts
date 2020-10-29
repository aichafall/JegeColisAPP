import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModifprofilPageRoutingModule } from './modifprofil-routing.module';

import { ModifprofilPage } from './modifprofil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModifprofilPageRoutingModule
  ],
  declarations: [ModifprofilPage]
})
export class ModifprofilPageModule {}
