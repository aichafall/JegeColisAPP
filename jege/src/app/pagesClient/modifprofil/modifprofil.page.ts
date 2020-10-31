import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { User } from 'src/app/models/user';
import { ApiService } from 'src/app/services/api.service';
import { ToastController,AlertController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-modifprofil',
  templateUrl: './modifprofil.page.html',
  styleUrls: ['./modifprofil.page.scss'],
})
export class ModifprofilPage implements OnInit {

  id: number;
  constructor(
    public toastController: ToastController,
    public activatedRoute: ActivatedRoute,
    private authService: AuthenticationService,
    public router: Router,
    public apiService: ApiService
  ) {

  }
  prenom= window.localStorage.getItem('userprenom');
  nom= window.localStorage.getItem('usernom');
  email= window.localStorage.getItem('useremail');
  adresse= window.localStorage.getItem('useradresse');
  telephone= window.localStorage.getItem('usertel');
  userid= window.localStorage.getItem('userid');
 
  
   async updateUser(value) {
    this.authService.UpdateUser(value)
      .subscribe(res => {
        console.log(res);
        console.log("modifié");
      })

      const toast = await this.toastController.create({
        message: 'Vos informations ont été modifiées avec succès.',
        position: 'top',
        color: "success",
        duration: 2000
      });
      toast.present();

    this.router.navigate(['profilclient']);
  }

  ngOnInit() {
    
  }

 

}
