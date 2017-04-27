import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ShotNamePage } from '../shot-name/shot-name';
import { Imageprovider } from '../../providers/imageprovider';

/*
  Generated class for the ShotType page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-shot-type',
  templateUrl: 'shot-type.html'
})

//the class is defined here
export class ShotTypePage {

//two string arrays are defined in the class
distanceNames: Array<{id: number, title: string, description: string, definition: string, graphic: string}>;

angleNames: Array<{id: number, title: string, description: string, definition: string, graphic: string}>;


  //constructor method that creates a nav controller and nav params for changing pages
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  //populate the two arrays with data
  this.distanceNames = [
  { id: 0, title: 'Extreme Long shot', description: 'Subject and surroundings', definition: 'The Extreme Longshot is taken so far away from the subject that their features are no longer visible. This is used to create a sense of a character being lost or almost engulfed by the sheer size of their surroundings. Which can result in a character being made small or insignificant due to their situation', graphic: 'assets/img/graphics/ExtremeLongshot.png'},
  { id: 1, title: 'Long shot', description: 'Entire subject', definition: 'Typically shows the entire object or human figure and is usually intended to place it in some relation to its surroundings.', graphic: 'assets/img/graphics/Longshot.png'},
  { id: 2, title: 'Medium Long shot', description: 'Subject from the knees-up', definition: 'Captures subject’s knees and upward. shows a bit more of the background but is still close enough for facial expressions to be seen.', graphic: 'assets/img/graphics/MediumLongshot.png'},
  { id: 3, title: 'Medium Shot', description: 'Subject from the waist-up', definition: 'Captures subject’s waist and upward. In principal, the medium shot is what can be seen with the human eye in a single quick glance and convey all the action taking place in that field of view.', graphic: 'assets/img/graphics/Mediumshot.png'},
  { id: 4, title: 'Medium Closeup', description: 'Subject from the shoulders-up', definition: 'Halfway between a mid shot and a close-up. Usually covers the subject’s head and shoulders.', graphic: 'assets/img/graphics/MediumCloseup.png'},
  { id: 5, title: 'Closeup', description: 'Subject head', definition: 'Close-ups display the most detail, but they do not include the broader scene.', graphic: 'assets/img/graphics/Closeup.png'},
  { id: 6, title: 'Extreme Closeup', description: 'Single feature of subject head', definition: 'The shot is so tight that only a detail of the subject, such as someone’s eyes, can be seen.', graphic: 'assets/img/graphics/ExtremeCloseup.png'},
    ];

    this.angleNames = [
    { id: 7, title: 'Eye Level', description: 'Camera level with subject', definition: 'An Eye-Level shot has little to no psychological effect on the viewer. This shot is when the camera is level or looking straight on with the subject.', graphic: 'assets/img/graphics/EyeLevel.png'},
    { id: 8, title: 'High Angle', description: 'Camera pointed down on subject', definition: 'A High-Angle shot is a shot in which the camera is physically higher than the subject and is looking down upon the subject. The high angle shot can make the subject look small or weak or vulnerable.', graphic: 'assets/img/graphics/HighAngle.png'},
    { id: 9, title: 'Low Angle', description: 'Camera pointed up on subject', definition: 'A Low-Angle Shot is taken from below the subject and has the power to make the subject look powerful or threatening.', graphic: 'assets/img/graphics/LowAngle.png'},
    { id: 10, title: 'Overhead', description: 'Camera directly above subject', definition: 'Overhead shots are taken directly above the scene to establish the landscape and the actors relationship to it.', graphic: 'assets/img/graphics/Overhead.png'},
    { id: 11, title: 'Canted', description: 'Camera tilted to the side', definition: 'A Canted Angle is an angle in which the camera itself is tilted to the left or the right. The unnatural angle gives the viewer a feeling that world is out of balance or psychological unrest.', graphic: 'assets/img/graphics/Canted.png'},
      ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShotTypePage');
  }

  //define methods that will push a new page onto the current one and pass an array to be recieved by the new page.
  pushDistancePage(){
    // push distance page onto navigation stack
    this.navCtrl.push(ShotNamePage, {nameData: this.distanceNames});
  }
  pushAnglePage(){
    // push angle page onto navigation stack
    this.navCtrl.push(ShotNamePage, {nameData: this.angleNames});
  }

}
