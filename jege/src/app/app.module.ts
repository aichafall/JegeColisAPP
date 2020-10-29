import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


import {HttpClientModule} from "@angular/common/http"
import { ServiceWorkerModule } from '@angular/service-worker'
import { environment } from '../environments/environment'
import {PushNotificationService } from 'src/app/services/push-notification.service';
import { Push } from '@ionic-native/push/ngx';
import { FCM } from 'cordova-plugin-fcm-with-dependecy-updated/ionic/ngx';
import { GoogleMaps } from '@ionic-native/google-maps';



@NgModule({
  declarations: [AppComponent],
 
  entryComponents: [],
  imports: [HttpClientModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {scope : './' ,enabled: environment.production }),
    BrowserModule, IonicModule.forRoot(), AppRoutingModule
     //AngularFireModule.initializeApp(config),
    //AngularFirestoreModule
  ],
  providers: [
    PushNotificationService,
    StatusBar,
    GoogleMaps,
    SplashScreen,
    Push,
    FCM,
   // Firebase,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
