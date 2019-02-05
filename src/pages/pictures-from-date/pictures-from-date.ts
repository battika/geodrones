import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ToastController } from 'ionic-angular';
import { HttpServiceProvider } from '../../providers/http-service/http-service';
import { Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';


import { UploadPage } from '../upload/upload';

/**
 * Generated class for the PicturesFromDatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pictures-from-date',
  templateUrl: 'pictures-from-date.html',
  providers: [ HttpServiceProvider ]
})
export class PicturesFromDatePage {

  date:any;
  pictures:any;
  label:any;
  res:any;

  constructor(public toastCtrl: ToastController, public modalCtrl: ModalController, public httpService: HttpServiceProvider, public navCtrl: NavController, public navParams: NavParams) {

    let date = navParams.get('date');
    let label = navParams.get('label');

    this.date = date;
    this.label = label;

  }

  presentProfileModal() {
    let profileModal = this.modalCtrl.create(UploadPage);
    profileModal.present();
  }

  ionViewDidLoad() {
    this.httpService.get_pictures_from_date(this.date)
    .then(data => {
      this.pictures = data;
      console.log(this.pictures);
    });
  }

  vote(id_img) {
    this.httpService.vote(id_img)
    .then(data => {
      this.res = data;

      if(this.res.error == "NOK") {
        //Error message
          let toast = this.toastCtrl.create({
            message: 'Vous avez déjà voté pour cette photo.',
            duration: 3000
          });
          toast.present();
      } else {
        this.ionViewDidLoad();

        let toast = this.toastCtrl.create({
          message: 'Merci d\'avoir voté !',
          duration: 3000
        });
        toast.present();
      }
      console.log(data);
    });

  }

}
