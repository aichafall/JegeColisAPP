// login.page.ts
import { Component, OnInit, Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

import { MenuController, IonSlides } from '@ionic/angular';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
@Injectable({
  providedIn:'root'
})
export class LoginPage implements OnInit {

  validations_form: FormGroup;
  errorMessage: string = '';

  @ViewChild(IonSlides) autoSlides: IonSlides;

  constructor(
    public menuCtrl: MenuController, 
    private elementRef: ElementRef,
    public toast: ToastController,
    private navCtrl: NavController,
    private authService: AuthenticationService,
    private formBuilder: FormBuilder,
  ) { this.elementRef.nativeElement.style.setProperty('--my-var',"#FFFFFF"); 
 }
 

  //POUR LES SLIDES
  public slides = [
    { image: "Bienvenue", },
    { image: "Welcome", },
    { image: "Daalal akk Jaam", },
  
  ];
  ionViewDidEnter() {
    this.autoSlides.startAutoplay();
  }
  //POUR LES SLIDES

  ngOnInit() {

    
    this.validations_form = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required, // email obligatoire
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$') //On doit avoir un mail sous la forme a@x.y
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(5), // mdp minimum 5 caractères
        Validators.required // mdp obligatoire
      ])),
    });
  }

  
  validation_messages = {
    'email': [
      { type: 'required', message: 'Adresse mail obligatoire.' },
      { type: 'pattern', message: 'Vous devez avoir une adresse valide.' }
    ],
    'password': [
      { type: 'required', message: 'Mot de passe obligatoire.' },
      { type: 'minlength', message: 'minimum 5 caractères.' }
    ]
  };
  
  

   loginUser(value) {
    this.authService.loginUser(value)
      .subscribe(res => {
        
        console.log(res);
        this.errorMessage = "";
        
        async res => {
          const toast = await this.toast.create({
            cssClass: 'toastTag',
            color: "success",
            position: 'top',
            message: "Bienvenue à JEGE Colis.",
            duration: 2000
        });
        toast.present();
        }

        this.navCtrl.navigateForward('/homeclient');
        window.localStorage.setItem('userid',res.userId);
        window.localStorage.setItem('userprenom',res.userprenom);
        window.localStorage.setItem('usernom',res.usernom);
        window.localStorage.setItem('useradresse',res.useradresse);
        window.localStorage.setItem('useremail',res.useremail);
        window.localStorage.setItem('usertel',res.usertel);
       
      }, async err => {
        this.errorMessage = err.message;
        
        const toast = await this.toast.create({
          cssClass: 'toastTag',
          color: "danger",
          position: 'top',
          message: "Mauvais identifiants. Veuillez réessayer.",
          duration: 2000
      });
      toast.present();


      })
  }

}