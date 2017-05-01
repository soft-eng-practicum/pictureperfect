import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ShotTypePage } from '../pages/shot-type/shot-type';
import { ShotNamePage } from '../pages/shot-name/shot-name';
import { ShotDefinitionPage } from '../pages/shot-definition/shot-definition';
import { WelcomePage } from '../pages/welcome/welcome';

import { Imageprovider } from '../providers/imageprovider';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ShotTypePage,
    ShotNamePage,
    ShotDefinitionPage,
    WelcomePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ShotTypePage,
    ShotNamePage,
    ShotDefinitionPage,
    WelcomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Imageprovider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
