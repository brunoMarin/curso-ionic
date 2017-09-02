import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {

  public nomeUsuario:string = "Bruno Marin xD";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public somaDoisNumero(num1:number, num2:number){
      alert(num1 + num2);
  }

  ionViewDidLoad() {
    //this.somaDoisNumero(1, 15);
    //console.log('ionViewDidLoad FeedPage');
  }

}
