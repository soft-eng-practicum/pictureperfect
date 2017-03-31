import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ShotDefinitionPage } from '../shot-definition/shot-definition';

/*
  Generated class for the ShotName page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-shot-name',
  templateUrl: 'shot-name.html'
})
export class ShotNamePage {

shotNames: Array<{title: string, description: string, definition: string, graphic: string}>;
selectedShot: Array<{title: string, description: string, definition: string, graphic: string}>;


  constructor(public navCtrl: NavController, public navParams: NavParams) {

  this.shotNames = navParams.get('nameData');
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ShotNamePage');
  }

  pushPage(s){
    // push another page on to the navigation stack
    // causing the nav controller to transition to the new page
    // optional data can also be passed to the pushed page.
    this.selectedShot = [
    {title: s.title, description: s.description, definition: s.definition, graphic: s.graphic},
    ];
    this.navCtrl.push(ShotDefinitionPage, {shot: this.selectedShot});
  }

}
