import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

//Pages
import { HomePage } from '../home/home';

@Component({
  selector: 'page-info',
  templateUrl: 'info.html'
})
export class InfoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
  }

  openPageHome() {
    this.navCtrl.push(HomePage);
  }
}
