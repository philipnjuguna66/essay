import { Component } from '@angular/core';
import { SettingService } from '../../app/services/settings.service'; 
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { LoadingController } from 'ionic-angular';
import {Http, Headers} from '@angular/http';
import { OrderdetailsPage } from '../orderdetails/orderdetails';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {
 items : any;
  constructor(public navCtrl: NavController, private http: Http,private settingService: SettingService , private alert: AlertController,private loading : LoadingController) {
   
  }
  ngOnInit()
  {
    let loader = this.loading.create({
    content: "Please wait...",
    duration: 100
     });
   loader.present();
    this.getOrders();
  }
  
  getOrders(){

    let loader = this.loading.create({
    content: "Please wait...",
    duration: 100
     });
   loader.present();
    
   var headers = new Headers();
   let link =this.settingService.baseUrl+"/getorders";  
   let da={};
   
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

      return new Promise(resolve => {
        
            this.http.get(link,{headers: headers}).map(res=>res.json())
            .subscribe(response => {
            this.items=response.data;
            console.log(response);            
        },
        err=>{
            let alert= this.alert.create({
              title: "Warning",
              subTitle: "Please check network connection",
              buttons: ['OK']
             });
          alert.present();   

      }); 
            
   });
  }
  viewItem(item)
  {
    this.navCtrl.push(OrderdetailsPage,{
      item:item
    })
  }
}
 