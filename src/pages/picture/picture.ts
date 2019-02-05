import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { HttpServiceProvider } from '../../providers/http-service/http-service';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

//pages
import { UploadPage } from '../upload/upload';
import { PicturesFromDatePage } from '../pictures-from-date/pictures-from-date';

@IonicPage()
@Component({
  selector: 'page-picture',
  templateUrl: 'picture.html',
  providers: [ HttpServiceProvider ]

})
export class PicturePage {
  pictures: any;


  constructor(public modalCtrl: ModalController, public httpService: HttpServiceProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  presentProfileModal() {
    let profileModal = this.modalCtrl.create(UploadPage);
    profileModal.present();
  }

  openPictures(date, mois, annee) {
    var label = mois + " " + annee;
    this.navCtrl.push(PicturesFromDatePage, {
      date: date,
      label:label
    });
  }

  ionViewDidLoad() {
    this.httpService.get_pictures_month()
    .then(data => {
      this.pictures = data;
      console.log(this.pictures);
    });


}

}
