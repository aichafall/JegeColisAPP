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
  // user: User;
  // <!-- EXEMPLE à FAIRE PARTOUT -->
  useremail= window.localStorage.getItem('useremail');
  // usernom="Aicha FALL";
  // useradresse="Yoff";
  // usernum="776554322";
  // usernom= window.localStorage.getItem('useremail');
  constructor(
    public toastController: ToastController,
    public activatedRoute: ActivatedRoute,
    private authService: AuthenticationService,
    public router: Router,
    public apiService: ApiService
  ) {
  //   this.user = new User();
  }
  prenom= window.localStorage.getItem('userprenom');
  nom= window.localStorage.getItem('usernom');
  email= window.localStorage.getItem('useremail');
  adresse= window.localStorage.getItem('useradresse');
  telephone= window.localStorage.getItem('usertel');
  userid= window.localStorage.getItem('userid');
  async presentToast(userid,value) {
    this.authService.UpdateUser(userid,value)
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

  // UpdateUser(userid,value) {
  //   this.authService.UpdateUser(userid,value)
  //     .subscribe(res => {
  //       console.log(res);
  //       window.localStorage.setItem('userid',res.user._id);
  //       window.localStorage.setItem('token',res.token);
  //       window.localStorage.setItem('useremail',res.user.email);
  //     })
  // }

}
