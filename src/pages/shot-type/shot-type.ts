import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ShotNamePage } from '../shot-name/shot-name';

/*
  Generated class for the ShotType page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-shot-type',
  templateUrl: 'shot-type.html'
})
export class ShotTypePage {

distanceNames: Array<{title: string, description: string, definition: string, graphic: string}>;

angleNames: Array<{title: string, description: string, definition: string, graphic: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  this.distanceNames = [
  { title: 'Extreme Longshot', description: 'Subject and surroundings', definition: 'The Extreme Longshot is taken so far away from the subject that their features are no longer visible. This is used to create a sense of a character being lost or almost engulfed by the sheer size of their surroundings. Which can result in a character being made small or insignificant due to their situation', graphic: 'assets/img/graphics/ExtremeLongshot.png'},
  { title: 'Longshot', description: 'Entire subject', definition: 'Typically shows the entire object or human figure and is usually intended to place it in some relation to its surroundings.', graphic: 'assets/img/graphics/Longshot.png'},
  { title: 'Medium Longshot', description: 'Subject from the knees-up', definition: 'Captures subject’s knees and upward. shows a bit more of the background but is still close enough for facial expressions to be seen.', graphic: 'assets/img/graphics/MediumLongshot.png'},
  { title: 'Medium Shot', description: 'Subject from the waist-up', definition: 'Captures subject’s waist and upward. In principal, the medium shot is what can be seen with the human eye in a single quick glance and convey all the action taking place in that field of view.', graphic: 'assets/img/graphics/Mediumshot.png'},
  { title: 'Medium Closeup', description: 'Subject from the shoulders-up', definition: 'Halfway between a mid shot and a close-up. Usually covers the subject’s head and shoulders.', graphic: 'assets/img/graphics/MediumCloseup.png'},
  { title: 'Closeup', description: 'Subject head', definition: 'Close-ups display the most detail, but they do not include the broader scene.', graphic: 'assets/img/graphics/Closeup.png'},
  { title: 'Extreme Closeup', description: 'Single feature of subject head', definition: 'The shot is so tight that only a detail of the subject, such as someone’s eyes, can be seen.', graphic: 'assets/img/graphics/ExtremeCloseup.png'},
    ];

    this.angleNames = [
    { title: 'Eye Level', description: 'Camera level with subject', definition: 'Eye level, perpendicular to subject', graphic: 'assets/img/graphics/ExtremeLongshot.png'},
    { title: 'High Angle', description: 'Camera pointed down on subject', definition: 'Camera above subject, angled downward toward the subject', graphic: 'assets/img/graphics/ExtremeLongshot.png'},
    { title: 'Low Angle', description: 'Camera pointed up on subject', definition: 'Camera below subject, angled upward toward the subject', graphic: 'assets/img/graphics/ExtremeLongshot.png'},
    { title: 'Overhead', description: 'Camera directly above subject', definition: 'Camera directly above subject, facing directly downward', graphic: 'assets/img/graphics/ExtremeLongshot.png'},
    { title: 'Canted', description: 'Camera tilted to the side', definition: 'Camera horizontally tilted in either direction', graphic: 'assets/img/graphics/ExtremeLongshot.png'},
      ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShotTypePage');
  }

  pushDistancePage(){
    // push another page on to the navigation stack
    // causing the nav controller to transition to the new page
    // optional data can also be passed to the pushed page.
    this.navCtrl.push(ShotNamePage, {nameData: this.distanceNames});
  }
  pushAnglePage(){
    // push another page on to the navigation stack
    // causing the nav controller to transition to the new page
    // optional data can also be passed to the pushed page.
    this.navCtrl.push(ShotNamePage, {nameData: this.angleNames});
  }

}
