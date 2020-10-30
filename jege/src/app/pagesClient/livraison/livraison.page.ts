import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-livraison',
  templateUrl: './livraison.page.html',
  styleUrls: ['./livraison.page.scss'],
})
export class LivraisonPage implements OnInit {

  colissData: any;

  constructor(private alertController: AlertController,
    public apiService: ApiService
  ) {
    this.colissData = [];
  }

  ngOnInit() {
    // this.getAllColis();
  }

 
  
  ionViewWillEnter() {
    // Used ionViewWillEnter as ngOnInit is not 
    // called due to view persistence in Ionic
    this.getAllColis();
  }

  getAllColis() {
    //Get saved list of colis
    this.apiService.getList().subscribe(response => {
     // console.log(response);
      this.colissData = response;
      console.log(this.colissData);
    })
    
  }
//var ref = id.slice(-5);

  delete(item) {
    //Delete item in Student data
    this.apiService.deleteItem(item.id).subscribe(Response => {
      //Update list after delete is successful
      this.getAllColis();
    });
  }
}
