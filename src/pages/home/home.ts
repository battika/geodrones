import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { LoadingController, ModalController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { AlertController } from 'ionic-angular';
import { HttpServiceProvider } from '../../providers/http-service/http-service';
import { MenuController } from 'ionic-angular';
import { AndroidFullScreen } from '@ionic-native/android-full-screen';

import { PicturePage } from '../picture/picture';
import { MapPage } from '../map/map';
import { InfoPage } from '../info/info';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {



  constructor( public loadingCtrl: LoadingController, private androidFullScreen: AndroidFullScreen, public menuCtrl: MenuController, public platform: Platform, public httpService: HttpServiceProvider,public navCtrl: NavController, private geolocation: Geolocation, public alertCtrl: AlertController) {  }

  openPagePicture() {
    this.navCtrl.push(PicturePage);
  }

  openMap() {
    this.navCtrl.setRoot(MapPage);
  }

  openPageInfo() {
    this.navCtrl.push(InfoPage);
  }


}
