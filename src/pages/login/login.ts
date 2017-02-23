import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Http, Headers} from '@angular/http';
 import { url } from '@url/url';
import 'rxjs/add/operator/map';
import { LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Page1 } from '../page1/page1';
import { SettingService } from '../../app/services/settings.service'; 



/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
   data:any;
   fetchdata:any;
   url: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http, private loading : LoadingController , private alert: AlertController,private settingService: SettingService) {

  }

  ionViewDidLoad() {
  
    
  }
  ngOnInit()
  {
    this.data={};
    this.data.username="";
    this.data.password="";
    let loader = this.loading.create({
      content: "Please wait...",
      duration: 100
   });
   loader.present();
  }

  login(){
  	let loader = this.loading.create({
	content: "Please wait...",
    duration: 100
   });
   loader.present();
   var headers = new Headers();
   var username=this.data.username;
   var password=this.data.password;
   let data ={username: this.data.username, password: this.data.password, url: this.data.url};

  /*let link="https://dotheessay.com/bet/public/api/login";*/
    let link=this.settingService.baseUrl+"/login";
  headers.append('Content-Type', 'application/x-www-form-urlencoded');

      return new Promise(resolve => {
        
            this.http.post(link,data, {headers: headers}).map(res=>res.json())
            .subscribe(data => {
            console.log(data);
            if(data.status=="success"){

				    	let loader = this.loading.create({
					    	content: data.message,
					        duration: 100
					       });
					       this.navCtrl.setRoot(Page1);
					    loader.present();

				    	
	            
				    }
				   else
				    {
				    let alert= this.alert.create({
					    	title: "Warning",
					        subTitle:data.message,
					        buttons: ['OK']
				       });
				       alert.present();
            }           
	            
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
 

}
