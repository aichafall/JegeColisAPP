// register.page.ts
import { Component, OnInit, Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  validations_form: FormGroup;
  errorMessage: string = '';

  constructor(
    public toast: ToastController,
    private navCtrl: NavController,
    private authService: AuthenticationService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.validations_form = this.formBuilder.group({

      prenom: new FormControl('', Validators.compose([
        Validators.required, // prenom obligatoire
      ])),
      telephone: new FormControl('', Validators.compose([
        Validators.required, // numero obligatoire
      ])),
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
  
  

  RegisterUser(value) {
    this.authService.RegisterUser(value)
      .subscribe(res => {
        console.log(res);
        this.errorMessage = "";
        this.navCtrl.navigateForward('/home');  
      }, async err => {
        this.errorMessage = err.message;
      })
  }

}
