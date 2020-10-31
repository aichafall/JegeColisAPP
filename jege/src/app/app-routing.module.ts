import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },

  {
    path: 'resetpwd',
    loadChildren: () => import('./pages/resetpwd/resetpwd.module').then( m => m.ResetpwdPageModule)
  },
  {
    path: 'verifyacc',
    loadChildren: () => import('./pages/verifyacc/verifyacc.module').then( m => m.VerifyaccPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'profil',
    loadChildren: () => import('./pages/profil/profil.module').then( m => m.ProfilPageModule)
  },
  {
    path: 'depot',
    loadChildren: () => import('./pages/depot/depot.module').then( m => m.DepotPageModule)
  },
  {
    path: 'reception',
    loadChildren: () => import('./pages/reception/reception.module').then( m => m.ReceptionPageModule)
  },
  {
    path: 'phonegap',
    loadChildren: () => import('./phonegap/phonegap.module').then( m => m.PhonegapPageModule)
  },
  {
    path: 'homeclient',
    loadChildren: () => import('./pagesClient/homeclient/homeclient.module').then( m => m.HomeclientPageModule)
  },
  {
    path: 'demande',
    loadChildren: () => import('./pagesClient/demande/demande.module').then( m => m.DemandePageModule)
  },
  {
    path: 'tracker',
    loadChildren: () => import('./pagesClient/tracker/tracker.module').then( m => m.TrackerPageModule)
  },
  {
    path: 'profilclient',
    loadChildren: () => import('./pagesClient/profilclient/profilclient.module').then( m => m.ProfilclientPageModule)
  },
  {
    path: 'aide',
    loadChildren: () => import('./pagesClient/aide/aide.module').then( m => m.AidePageModule)
  },
  {
    path: '',
    loadChildren: () => import('./pagesClient/welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'bravo',
    loadChildren: () => import('./pagesClient/bravo/bravo.module').then( m => m.BravoPageModule)
  },
  {
    path: 'livraison',
    loadChildren: () => import('./pagesClient/livraison/livraison.module').then( m => m.LivraisonPageModule)
  },
  {
    path: 'detail/:id',
    loadChildren: () => import('./pagesClient/detail/detail.module').then( m => m.DetailPageModule)
  },
  {
    path: 'modifprofil',
    loadChildren: () => import('./pagesClient/modifprofil/modifprofil.module').then( m => m.ModifprofilPageModule)
  },  {
    path: 'itineraire',
    loadChildren: () => import('./pageClient/itineraire/itineraire.module').then( m => m.ItinerairePageModule)
  },
  {
    path: 'trackerattente',
    loadChildren: () => import('./pageClient/trackerattente/trackerattente.module').then( m => m.TrackerattentePageModule)
  },
  {
    path: 'trackerlivre',
    loadChildren: () => import('./pageClient/trackerlivre/trackerlivre.module').then( m => m.TrackerlivrePageModule)
  },




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
