import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {DetailsPage} from '../details/details';

@Component({
  selector: 'home-page',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
viewItem(item){
  this.navCtrl.push(DetailsPage, {
 item:item
  });
}
}


