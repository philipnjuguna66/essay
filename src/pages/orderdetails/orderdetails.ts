import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Orderdetails page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-orderdetails',
  templateUrl: 'orderdetails.html'
})
export class OrderdetailsPage {
      item: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

	  this.item=navParams.get('item');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderdetailsPage');
  }

}
