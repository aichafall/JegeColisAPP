import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { WelcomePage } from './welcome.page';

const routes: Routes = [
{
path: '',
component: WelcomePage
}
];

@NgModule({
imports: [
CommonModule,
FormsModule,
IonicModule,
RouterModule.forChild(routes)
],
declarations: [WelcomePage]
})
export class WelcomePageModule {}