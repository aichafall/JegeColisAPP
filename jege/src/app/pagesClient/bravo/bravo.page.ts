import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-bravo',
  templateUrl: './bravo.page.html',
  styleUrls: ['./bravo.page.scss'],
})
export class BravoPage implements OnInit {

  constructor(private router: Router,private navCtrl: NavController,) { }

  ngOnInit() {
  }
  navigateToLogin() {
    this.navCtrl.navigateForward('/homeclient');
    }

}
