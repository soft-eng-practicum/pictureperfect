import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Imageprovider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Imageprovider {

public storedImages: string[] = ["", "", "", "", "", "", "", "", "", "", "", ""];

  constructor(public http: Http) {
    console.log('Hello Imageprovider Provider');
  }

  public setData(data, i){
    this.storedImages[i] = data;
  }

  public getData(i){
    return this.storedImages[i];
  }

}
