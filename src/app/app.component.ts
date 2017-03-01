import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { LoginPage } from '../pages/login/login';
import { OrderdetailsPage } from '../pages/orderdetails/orderdetails';
import { Storage} from '@ionic/storage';

import { SettingService } from './services/settings.service'; 


@Component({
  templateUrl: 'app.html',
  providers:[SettingService]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;
  public local: Storage;
  public newlocal:any;
  public items:any;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform) {
    this.initializeApp();
    this.local = new Storage();
    this.items='';
    this.local.get('localdata').then((data)=>this.newlocal=data);

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Orders', component: Page1 }
      
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
