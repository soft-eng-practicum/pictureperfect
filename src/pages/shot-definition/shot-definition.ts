import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Camera} from 'ionic-native';

/*
  Generated class for the ShotDefinition page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-shot-definition',
  templateUrl: 'shot-definition.html'
})
export class ShotDefinitionPage {
public base64Image: string;

selectedShot: Array<{title: string, description: string, definition: string, graphic: string}>;

shotDefinitions: Array<{title: string, description: string, definition: string, graphic: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.selectedShot = navParams.get('shot');


  }
  
  takePicture(){
    Camera.getPicture({
        destinationType: Camera.DestinationType.DATA_URL,
        targetWidth: 1000,
        targetHeight: 1000
    }).then((imageData) => {
      // imageData is a base64 encoded string
        this.base64Image = "data:image/jpeg;base64," + imageData;
    }, (err) => {
        console.log(err);
    });

}


  ionViewDidLoad() {
    console.log('ionViewDidLoad ShotDefinitionPage');
  }


}
