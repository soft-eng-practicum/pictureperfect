import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Camera} from 'ionic-native';
import { Imageprovider } from '../../providers/imageprovider';

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

selectedShot: Array<{id: number, title: string, description: string, definition: string, graphic: string}>;

shotDefinitions: Array<{title: string, description: string, definition: string, graphic: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public mydata: Imageprovider) {
  this.selectedShot = navParams.get('shot');
  this.base64Image = this.mydata.getData(this.selectedShot[0].id);

  }

  takePicture(){
    var options = {
        quality: 100,
        destinationType: Camera.DestinationType.FILE_URI,
        sourceType: Camera.PictureSourceType.CAMERA,
        allowEdit: false,
        // encodingType: Camera.EncodingType.PNG,
        // targetWidth: 250,
        // targetHeight: 250,
        saveToPhotoAlbum: false,
        correctOrientation: true,
        cameraDirection: Camera.Direction.BACK
    };

    Camera.getPicture(options).then((imageData) => {
            this.base64Image = imageData;
            this.mydata.setData(imageData, this.selectedShot[0].id);
            this.base64Image = this.mydata.getData(this.selectedShot[0].id);
    }, (error) => {
        console.log("ERROR -> " + JSON.stringify(error));
    });

}


  ionViewDidLoad() {
    console.log('ionViewDidLoad ShotDefinitionPage');
  }


}
