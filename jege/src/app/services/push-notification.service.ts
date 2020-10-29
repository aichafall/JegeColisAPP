import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

//const SERVER_URL = 'https://guarded-shore-44808.herokuapp.com/api/subscription'
const SERVER_URL = 'http://localhost:5000/api/subscription'

@Injectable()
export class PushNotificationService {

  constructor(private http: HttpClient) {}

  public sendSubscriptionToTheServer(subscription: any) {
    return this.http.post(SERVER_URL, subscription)
  }
}