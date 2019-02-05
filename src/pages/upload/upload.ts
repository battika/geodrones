import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController,ViewController } from 'ionic-angular';
import { LoadingController, ToastController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { HttpServiceProvider } from '../../providers/http-service/http-service';
import { AlertController } from 'ionic-angular';
import { Device } from '@ionic-native/device';

/**
 * Generated class for the UploadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-upload',
  templateUrl: 'upload.html',
  providers: [ HttpServiceProvider ]

})

export class UploadPage {


presentToast:any;
imageURI:any;
img:any;
location: any;
pseudo: any;
hash1: any;
hash2: any;
hash3: any;
url_pic: any;
up_res: any;
error: any;
up_res_json: any;

  constructor(private device: Device, public alertCtrl: AlertController, public httpService: HttpServiceProvider,private transfer: FileTransfer, private file: File,private camera: Camera, public loadingCtrl: LoadingController, public toastCtrl: ToastController, public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams,  public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UploadPage');
  }

  getImage() {
  const options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.FILE_URI,
    sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
  }

  this.camera.getPicture(options).then((imageData) => {
    console.log(imageData);
    this.imageURI = imageData;
  }, (err) => {
    console.log(err);
  });
}

Upload() {
  let loading = this.loadingCtrl.create({
    content: 'Upload en cours...'
  });
  loading.present();
  setTimeout(() => {
    loading.dismiss();
  }, 5000);

  if(this.location !="" && this.pseudo !="" && this.hash1 !="" && this.hash2 !="" && this.hash3 !="" && this.url_pic !="") {
    const fileTransfer: FileTransferObject = this.transfer.create();

    let options: FileUploadOptions = {
      fileKey: "file",
      fileName: this.imageURI,
      chunkedMode: false,
      mimeType: "multipart/form-data",
      params : { 'location': this.location, 'pseudo': this.pseudo, 'hash1': this.hash1, 'hash2': this.hash2, 'hash3': this.hash3, 'url': this.url_pic, 'devise': this.device.uuid}, // directory represents remote directory,  fileName represents final remote file name
      headers: {}
    };

    fileTransfer.upload(this.imageURI, 'https://api.geodrones.fr/api.php?action=upload_img', options)
      .then((status) => {
          let alert = this.alertCtrl.create({
            title: 'GeoDrones',
            subTitle: 'Merci, la photo sera publié prochainement !',
            buttons: ['OK']
          });
          alert.present();
          loading.dismiss();
          this.viewCtrl.dismiss();

    }, (err) => {
      let alert = this.alertCtrl.create({
        title: 'Aie!',
        subTitle: 'Erreur 😱 !',
        buttons: ['OK']
      });
      alert.present();
      console.log(err);

    });
  } else {
    let alert = this.alertCtrl.create({
      title: 'Aie!',
      subTitle: 'Merci de remplir tous les champs 😱 !',
      buttons: ['OK']
    });
    alert.present();
  }
}

closeModal() {
 this.viewCtrl.dismiss();
}


}
