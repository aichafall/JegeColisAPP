import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReceptionPageRoutingModule } from './reception-routing.module';

import { ReceptionPage } from './reception.page';


import { RouterModule } from '@angular/router';


//import { NgxDatatableModule } from '@swimlane/ngx-datatable';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReceptionPageRoutingModule,
    RouterModule.forChild([
      {
        path: '',
        component: ReceptionPage
      }
    ]),
  //S  NgxDatatableModule,
  ],
  declarations: [ReceptionPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ReceptionPageModule {}
