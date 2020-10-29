import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

import { HttpClient } from '@angular/common/http';
import { ViewEncapsulation } from '@angular/core';

export interface Data {
  colis: string;
}

@Component({
  selector: 'app-reception',
  templateUrl: './reception.page.html',
  styleUrls: ['./reception.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ReceptionPage implements OnInit {

/*
  public data: Data;
  public columns: any;
  public rows: any; */
  constructor(private alertCtrl: AlertController,
    //private http: HttpClient
    ) {

   /*
    this.columns = [

      { name: 'Référence' },
      { name: 'Nom Expediteur' },
      { name: 'Prenom Expediteur' },
      { name: 'Tel Expediteur'  },
      { name: 'Nom Destinataire'  },
      { name: 'Prénom Destinataire'  },
      { name: 'Tel Destinataire'  },
      { name: 'Etat Colis'  },
      { name: 'Actions'  },
    ];

    this.http.get<Data>('../../assets/colis.json')
      .subscribe((res) => {
        console.log(res)
        this.rows = res.colis;
      });                       */
}

  ngOnInit() {
  }




  //Pour 'alerte
  async presentPrompt() {
    const alert = await this.alertCtrl.create({
      header: 'Confirmation',
      inputs: [
        {
          name: 'Saississez le code de retrait',
          placeholder: 'Saississez le code de retrait'
        },
        
      ],
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Confirmer',

              handler: data => {
                console.log('Confirmer clicked');// à enlever
                /*
                if (User.isValid(data.username, data.password)) {
                   // logged in!
               } else {
                  // invalid login
                  return false;
                }*/
                               }  

        },
      ]
    });
    alert.present();
  }
retrait()
{this.presentPrompt();}


}
