import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//import { User } from 'src/app/models/user';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-profilclient',
  templateUrl: './profilclient.page.html',
  styleUrls: ['./profilclient.page.scss'],
})
export class ProfilclientPage implements OnInit {

  // id: number;
  // user: User;

  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public apiService: ApiService
  ) {
    // this.user = new User();
  }

  ngOnInit() {
    // this.id = this.activatedRoute.snapshot.params["id"];
    // //get item details using id
    // this.apiService.getUser(this.id).subscribe(response => {
    //   console.log(response);
    //   this.user = response;
    // })
  }

  useremail= window.localStorage.getItem('useremail');
}
