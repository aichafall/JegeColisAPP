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
      nature: ['', Validators.required],
      quantite: ['', Validators.required],
      paiement: ['', Validators.required],
  });
    
 
 //SLIDE 2
 this.validations_form2 = this.formBuilder.group({
  nomexpediteur: new FormControl('', Validators.compose([
    Validators.required, // nom obligatoire
    Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'),
  ])),
  adresseexpediteur: new FormControl('', Validators.compose([
    
    Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'),
  ])),
  ptrelaissource: [''],
  expediteur: new FormControl('', Validators.compose([
    Validators.minLength(9),
    Validators.required, // nom obligatoire
  ])),
});

//SLIDE 3
 this.validations_form3 = this.formBuilder.group({
  nomdestinataire: new FormControl('', Validators.compose([
    Validators.required, // nom obligatoire
    Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'),
  ])),
  adressedestinataire: new FormControl('', Validators.compose([
    
    Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'),
  ])),
  ptrelaisdestination: [''],
  destinataire: new FormControl('', Validators.compose([
    Validators.minLength(9),
    Validators.maxLength(9),
    Validators.required, // nom obligatoire
  ])),
});

  }

  validation_messages = {
    'nature': [
      { type: 'required', message: 'Nature du colis obligatoire.' },
    ],
    'quantite': [
      { type: 'required', message: 'Quantité obligatoire.' },
    ],
    'paiement': [
      { type: 'required', message: 'Nature du paiement obligatoire.' },
    ],
    'nomexpediteur': [
      { type: 'required', message: 'Identité de lexpéditeur obligatoire.' },
      { type: 'pattern', message: 'Nom trop long' }
    ],
    'adresseexpediteur': [
      { type: 'maxlength', message: 'Adresse trop longue' },
      { type: 'pattern', message: 'Adresse non valide' }
    ],
    'expediteur': [
      { type: 'maxlength', message: 'Numéro de téléphone trop long' },
      { type: 'minlength', message: 'Numéro de téléphone trop court' },
      { type: 'required', message: 'Numéro de téléphone obligatoire.' },
    ],
    'nomdestinataire': [
      { type: 'required', message: 'Identité de lexpéditeur obligatoire.' },
      { type: 'pattern', message: 'Nom trop long' }
    ],
    'adressedestinataire': [
      { type: 'maxlength', message: 'Adresse trop longue' },
      { type: 'pattern', message: 'Adresse non valide' }
    ],
    'destinataire': [
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
  else if(!this.validations_form2.value.expediteur && !this.validations_form2.value.nomexpediteur ){
      this.signupSlider.slideTo(1);
  }
  else if(!this.validations_form3.value.destinataire && !this.validations_form3.value.nomdestinataire){
    this.signupSlider.slideTo(2);
}
  else {
    
      console.log("success!") 
 
          this.colis.nature = this.validations_form1.value.nature;
          this.colis.quantite = this.validations_form1.value.quantite;
          this.colis.paiement = this.validations_form1.value.paiement;
      this.colis.nomexpediteur = this.validations_form2.value.nomexpediteur ;
      this.colis.adresseexpediteur = this.validations_form2.value.adresseexpediteur ;
      this.colis.expediteur = this.validations_form2.value.expediteur ;
    this.colis.nomdestinataire = this.validations_form3.value.nomdestinataire ;
    this.colis.adressedestinataire = this.validations_form3.value.adressedestinataire ;
    this.colis.destinataire = this.validations_form3.value.destinataire ;

    this.colis.ptrelaissource = this.validations_form2.value.ptrelaissource;
    this.colis.ptrelaisdestination = this.validations_form3.value.ptrelaisdestination;
    console.log(this.colis);
    // console.log(this.colis.nature);
    // console.log(this.colis.expediteur);
    // console.log(this.colis.destinataire);
    this.apiService.createItem(this.colis).subscribe((response) => {
      console.log("inséré!");
      // console.log(this.colis);
      this.navCtrl.navigateForward('/bravo');
    });  }

        }
      }
    ]
  });

  await alert.present();
}


}
