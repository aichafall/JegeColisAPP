import { Component, OnInit } from '@angular/core';
import { Push, PushObject, PushOptions } from '@ionic-native/push/ngx';
import { PushNotificationService } from '../services/push-notification.service';


@Component({
  selector: 'app-phonegap',
  templateUrl: './phonegap.page.html',
  styleUrls: ['./phonegap.page.scss'],
})
export class PhonegapPage implements OnInit {

  constructor(private push : Push, private notifServer : PushNotificationService) { }

  ngOnInit() {
    
    this.push.hasPermission()
      .then((res: any) => {

        if (res.isEnabled) {
          console.log('We have permission to send push notifications');
        } else {
          console.log('We do not have permission to send push notifications');
        }

      });


    const options: PushOptions = {
      android: {},
      ios: {
        alert: 'true',
        badge: true,
        sound: 'false'
      },
      windows: {},
      browser: {
        pushServiceURL: 'http://push.api.phonegap.com/v1/push'
      }
    }

    const pushObject: PushObject = this.push.init(options);

    pushObject.on('registration').subscribe((subscription)=> {
      console.log("Subscription réussie");
    })
    

    pushObject.on('notification').subscribe((notification) =>{
      alert('Voici une superbe nouvelle');
    })
    
  }

  

}
