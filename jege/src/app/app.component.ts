
import {  
  Component,  
} from '@angular/core'; 
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Push, PushObject, PushOptions } from '@ionic-native/push/ngx';
import { NavController } from '@ionic/angular';
import { SwPush } from '@angular/service-worker'
import { Router } from '@angular/router';
import {PushNotificationService } from 'src/app/services/push-notification.service';
import { FCM } from 'cordova-plugin-fcm-with-dependecy-updated/ionic/ngx';
const VAPID_PUBLIC ='BMLgWD9TCxqHhIcoNeAxwG3ieIq09FqYbl6M5js6boJly36V6DocsRyel90f48v_B9a0q_s11zF2AXW0PGH_7yg';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent  { 
  currentPageTitle = 'Dashboard';
  
  navigate : any;
  pushes: any = [];
  constructor(
    private navCtrl: NavController,
    swPush: SwPush,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private pushService: PushNotificationService,
    private push: Push,
    private fcm: FCM,
    private router: Router
  ) {
    //this._notificationService.requestPermission();
    this.sideMenu();
    this.initializeApp();
  }
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      //ios
      this.fcm.hasPermission().then(hasPermission => {
        if (hasPermission) {
          alert("On a la permission fils");
        }
      })
      this.fcm.subscribeToTopic('people');
      this.fcm.getToken().then(token => {
        console.log(token);
      });
     
      
      this.fcm.onTokenRefresh().subscribe(token => {
        console.log(token);
      });
      
      this.fcm.onNotification().subscribe(data => {
        console.log(data);
        if (data.wasTapped) {
          console.log('Received in background');
          // this.router.navigate([data.landing_page, data.price]);
          this.navCtrl.navigateForward('/tracker');
        } else {
          console.log('Received in foreground');
          // this.router.navigate([data.landing_page, data.price]);
          this.navCtrl.navigateForward('/tracker');
        }
      });
      //this.fcm.subscribeToTopic('colis');

      // this.fcm.getToken().then(token => {
      //   alert('token :' + token);
      //   var tok = {
      //     "token" : token
      //   }

      //   this.fcm.subscribeToTopic('colis').then((a) => {
          
      //   });
      // });
      // this.fcm.onNotification().subscribe(data => {
      //   if (data.wasTapped) {
          
      //     //Notification was received on device tray and tapped by the user.
      //     this.pushes.push({
      //       body: data.body,
      //       title: data.title,

      //     })
      //     console.log(this.pushes)
         
      //     this.navCtrl.navigateForward('/detail-colis');
      //   } else {
      //     //Notification was received in foreground. Maybe the user needs to be notified.
      //     this.pushes.push({
      //       body: data.body,
      //       title: data.title
      //     })
      //     console.log(this.pushes)
          
      //     this.navCtrl.navigateForward('/detail-colis');
      //   }
      //   alert("Une Bonne nouvelle" + data.nature)
      //   window.localStorage.setItem('reference',data.reference);
      //   window.localStorage.setItem('nature',data.nature);
      //   window.localStorage.setItem('source',data.pointRelaisSource_id);
      //   window.localStorage.setItem('destination',data.pointRelaisDest_id);
      // });

    });
  }

 


  sideMenu()
  {
    this.navigate =
    [
      {
        title : " Demande de livraison  ",
        url   : "/demande",
        icon  : "cube"
      },
      {
        title : "Mes colis",
        url   : "/livraison",
        icon  : "time"
      },
      {
        title : "Suivi du colis",
        url   : "/tracker",
        icon  : "location"
      },
      {
        title : " Votre Profil ",
        url   : "/profilclient",
        icon  : "person"
      },
      {
        title : " Carte des points JEGE  ",
        url   : "/itineraire",
        icon  : "map"
      },
     
     
    ]
  }
}
