import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { User } from 'src/app/models/user';
import { ApiService } from 'src/app/services/api.service';
import { ToastController,AlertController } from '@ionic/angular';

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
  usernom="Aicha FALL";
  useradresse="Yoff";
  usernum="776554322";
  // usernom= window.localStorage.getItem('useremail');
  constructor(
    public toastController: ToastController,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public apiService: ApiService
  ) {
  //   this.user = new User();
  }

  async presentToast() {
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
    // this.id = this.activatedRoute.snapshot.params["id"];
    // //get item details using id
    // this.apiService.getUser(this.id).subscribe(response => {
    //   console.log(response);
    //   this.user = response;
    // })
  }

  // update() {
  //   this.router.navigate(['profilclient']);
  //   //Update item by taking id and updated colis object
  // //   this.apiService.updateUser(this.id, this.user).subscribe(response => {
  // //      this.router.navigate(['profilclient']);
  // //   })
  //  }

}
