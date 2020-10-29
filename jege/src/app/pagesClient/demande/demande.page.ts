import { Component, OnInit, Injectable,ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ToastController,AlertController } from '@ionic/angular';
import { Colis } from 'src/app/models/colis';
import { ApiService } from 'src/app/services/api.service';

import { MenuController, IonSlides } from '@ionic/angular';

import { ElementRef } from '@angular/core';


@Component({
  selector: 'app-demande',
  templateUrl: './demande.page.html',
  styleUrls: ['./demande.page.scss'],
})
export class DemandePage implements OnInit {

  @ViewChild('signupSlider') signupSlider;
  validations_form1: FormGroup;
  validations_form2: FormGroup;
  validations_form3: FormGroup;
  errorMessage: string = '';
  public submitAttempt: boolean = false;

  colis: Colis

  constructor(
    public apiService: ApiService,
    public menuCtrl: MenuController, 
    private elementRef: ElementRef,
    public toast: ToastController,
    public alertController: AlertController,
    private navCtrl: NavController,
    private authService: AuthenticationService,
    private formBuilder: FormBuilder,
  ) { this.colis = new Colis(); }
 
  ngOnInit() {

    //SLIDE 1
    this.validations_form1 = this.formBuilder.group({
      colis: ['', Validators.required],
      quantite: ['', Validators.required],
      paiement: ['', Validators.required],
  });
    
 
 //SLIDE 2
 this.validations_form2 = this.formBuilder.group({
  nom: new FormControl('', Validators.compose([
    Validators.required, // nom obligatoire
    Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'),
  ])),
  adresse: new FormControl('', Validators.compose([
    
    Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'),
  ])),
  relais: [''],
  telephone: new FormControl('', Validators.compose([
    Validators.minLength(9),
    Validators.required, // nom obligatoire
  ])),
});

//SLIDE 3
 this.validations_form3 = this.formBuilder.group({
  nom1: new FormControl('', Validators.compose([
    Validators.required, // nom obligatoire
    Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'),
  ])),
  adresse1: new FormControl('', Validators.compose([
    
    Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'),
  ])),
  relais2: [''],
  telephone1: new FormControl('', Validators.compose([
    Validators.minLength(9),
    Validators.maxLength(9),
    Validators.required, // nom obligatoire
  ])),
});

  }

  validation_messages = {
    'colis': [
      { type: 'required', message: 'Nature du colis obligatoire.' },
    ],
    'quantite': [
      { type: 'required', message: 'Quantité obligatoire.' },
    ],
    'paiement': [
      { type: 'required', message: 'Nature du paiement obligatoire.' },
    ],
    'nom': [
      { type: 'required', message: 'Identité de lexpéditeur obligatoire.' },
      { type: 'pattern', message: 'Nom trop long' }
    ],
    'adresse': [
      { type: 'maxlength', message: 'Adresse trop longue' },
      { type: 'pattern', message: 'Adresse non valide' }
    ],
    'telephone': [
      { type: 'maxlength', message: 'Numéro de téléphone trop long' },
      { type: 'minlength', message: 'Numéro de téléphone trop court' },
      { type: 'required', message: 'Numéro de téléphone obligatoire.' },
    ],
    'nom1': [
      { type: 'required', message: 'Identité de lexpéditeur obligatoire.' },
      { type: 'pattern', message: 'Nom trop long' }
    ],
    'adresse1': [
      { type: 'maxlength', message: 'Adresse trop longue' },
      { type: 'pattern', message: 'Adresse non valide' }
    ],
    'telephone1': [
      { type: 'maxlength', message: 'Numéro de téléphone trop long' },
      { type: 'minlength', message: 'Numéro de téléphone trop court' },
      { type: 'required', message: 'Numéro de téléphone obligatoire.' },
    ],
  };
  
 
  next(){
    this.signupSlider.slideNext();
}

prev(){
    this.signupSlider.slidePrev();
}
save(){

  

}
async presentAlertConfirm() {
  const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: 'Veuillez confirmer!',
    message: 'Confirmer vous votre demande de livraison?',
    buttons: [
      {
        text: 'Annuler',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {
          console.log('Confirm Cancel: blah');
        }
      }, {
        text: 'Oui!',
        handler: () => {
          console.log('Confirm Okay');

          this.submitAttempt = true;
  if(!this.validations_form1.valid){
      this.signupSlider.slideTo(0);
  } 
  else if(!this.validations_form2.value.telephone && !this.validations_form2.value.nom ){
      this.signupSlider.slideTo(1);
  }
  else if(!this.validations_form3.value.telephone1 && !this.validations_form3.value.nom1){
    this.signupSlider.slideTo(2);
}
  else {
    
      console.log("success!") 
 
          this.colis.nature = this.validations_form1.value.colis;
    this.colis.expediteur = this.validations_form2.value.telephone ;
    this.colis.destinataire = this.validations_form3.value.telephone1 ;
    this.colis.ptrelaissource = this.validations_form2.value.relais;
    this.colis.ptrelaisdestination = this.validations_form3.value.relais2;
    // console.log(this.colis.nature);
    // console.log(this.colis.expediteur);
    // console.log(this.colis.destinataire);
    this.apiService.createItem(this.colis).subscribe((response) => {
      console.log("inséré!");
      console.log(this.colis);
      this.navCtrl.navigateForward('/bravo');
    });  }

        }
      }
    ]
  });

  await alert.present();
}


}
