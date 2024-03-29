import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { MenuController, ModalController,AlertController,IonSlides } from '@ionic/angular';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';


@Component({
  selector: 'app-homeclient',
  templateUrl: './homeclient.page.html',
  styleUrls: ['./homeclient.page.scss'],
})
export class HomeclientPage {
  @ViewChild(IonSlides) autoSlides: IonSlides;

  constructor(private navCtrl: NavController, private alertController: AlertController,public menuCtrl: MenuController, 
     private elementRef: ElementRef) {
      
    this.elementRef.nativeElement.style.setProperty('--my-var',"#FFFFFF");  {}
   }

  

   public slides = [
    { image: "assets/img/1.png" },
    { image: "assets/img/2.png" },
    { image: "assets/img/3.png" },
    { image: "assets/img/4.png" },
    { image: "assets/img/5.png" },
  ];
  /////////banner slides autoplay function////////////////
  ionViewDidEnter() {
    this.autoSlides.startAutoplay();
  }
  /////////banner slides previous function///////////////////
  prevSlide() {
    this.autoSlides.slidePrev();
  }
  /////////////banner slides next function///////////////
  nextSlide() {
    this.autoSlides.slideNext();
  }
  
  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Suivre mon colis',
      inputs: [
        {
          name: 'ref',
          placeholder: 'Référence du colis',
          
        }
      ],
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Allons-y!',
          handler: (alertData) => {
            console.log('Confirm Okay');
            console.log(alertData.ref);
            if(alertData.ref=='JC0b0ad')
            {this.navCtrl.navigateForward("/tracker");}
            else if(alertData.ref=='JCa5589')
            {this.navCtrl.navigateForward("/trackerlivre");}
            else
            {this.navCtrl.navigateForward("/trackerattente");}
            
  
          }
        }
      ]
    });
  
    await alert.present();
  }
  

  redirect (page: string) {
    this.navCtrl.navigateForward(page);
  }

}
