import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Geolocation } from '@ionic-native/geolocation';
import { HttpServiceProvider } from '../providers/http-service/http-service';
import { DomSanitizer, SafeUrl} from '@angular/platform-browser';
import { LoadingController, AlertController,ModalController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AndroidPermissions } from '@ionic-native/android-permissions';

//Pages
import { HomePage } from '../pages/home/home';
import { InfoPage } from '../pages/info/info';
import { PicturePage } from '../pages/picture/picture';
import { UploadPage } from '../pages/upload/upload';
import { IntroPage } from '../pages/intro/intro';
import { KpInfoPage } from '../pages/kp-info/kp-info';

@Component({
  templateUrl: 'app.html',
  providers: [ HttpServiceProvider ]

})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  city: any;
  name: any;
  meteo: any;
  options: any;
  meteo_description: any;
  temp: any;
  windspeed: any;
  humidity: any;
  alti: any;
  cardinal: any;
  winddeg: any;
  main: any;
  kp: any;
  urlpic:any;



  pages: Array<{title: string, component: any}>;

  constructor(public modalCtrl: ModalController, private androidPermissions: AndroidPermissions, public loadingCtrl: LoadingController, private sanitizer: DomSanitizer, public httpService: HttpServiceProvider, public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,  private geolocation: Geolocation, public alertCtrl: AlertController, public storage: Storage) {
    this.initializeApp();
  }

  ngOnInit() {
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.storage.get('intro-done').then(done => {
        // enableProdMode();
        if (!done) {
          this.storage.set('intro-done', true);
          this.nav.push(IntroPage);
        }
      });
      this.splashScreen.hide();
      this.getMeteo();
    });
  }

  OpenKPInfo() {
    let kpinfo = this.modalCtrl.create(KpInfoPage);
    kpinfo.present();
  }

  getMeteo() {
    let loading = this.loadingCtrl.create({
      content: 'Merci de patienter...'
    });
    loading.present();
    setTimeout(() => {
      loading.dismiss();
    }, 5000);

    this.options = {
      enableHighAccuracy : true
    };
    this.geolocation.getCurrentPosition(this.options).then((resp) => {
      console.log(resp);
      if(resp.coords.altitude !=null) {
        this.alti = Number((resp.coords.altitude).toFixed(1));

      }
      else {
        this.alti = "0";
      }

      this.httpService.getKp()
        .then(data => {
          this.kp = data[1];
          console.log(data);
        });

      //Récupérer les positions GPS à partir de l'adresse
      this.httpService.getMeteo({lat : resp.coords.latitude, long: resp.coords.longitude})
      .then(data => {
        loading.dismiss();

        this.city = data['name'];
        this.meteo_description = data['weather'][0]['description'];
        this.temp = Number((data['main']['temp']).toFixed(1));
        this.windspeed = Number((data['wind']['speed']).toFixed(1));
        this.humidity = data['main']['humidity'];

        var deg = data['wind']['deg'];
        var cardinal;
        if((deg>=0 && deg <=  11.25) || (deg > 348.75 && deg <= 360) ){ cardinal = 'N';}
        else if(deg > 11.25  && deg <=  33.75  ){ cardinal = 'NNE';}
        else if(deg > 33.75  && deg <=  56.25  ){ cardinal = 'NE';}
        else if(deg > 56.25  && deg <=  78.75  ){ cardinal = 'ENE';}
        else if(deg > 78.75  && deg <=  101.25 ){ cardinal = 'E';}
        else if(deg > 101.25 && deg <=  123.75 ){ cardinal = 'ESE';}
        else if(deg > 123.75 && deg <=  146.25 ){ cardinal = 'SE';}
        else if(deg > 146.25 && deg <=  168.75 ){ cardinal = 'SSE';}
        else if(deg > 168.75 && deg <=  191.25 ){ cardinal = 'S';}
        else if(deg > 191.25 && deg <=  213.75 ){ cardinal = 'SSW';}
        else if(deg > 213.75 && deg <=  236.25 ){ cardinal = 'SW';}
        else if(deg > 236.25 && deg <=  258.75 ){ cardinal = 'WSW';}
        else if(deg > 258.75 && deg <=  281.25 ){ cardinal = 'W';}
        else if(deg > 281.25 && deg <=  303.75 ){ cardinal = 'WNW';}
        else if(deg > 303.75 && deg <=  326.25 ){ cardinal = 'NW';}
        else if(deg > 326.25 && deg <=  348.75 ){ cardinal = 'NNW';}

        this.cardinal = cardinal;
        this.winddeg = deg;

        if(data['weather'][0]['main'] == "Clear") {
          this.urlpic = "Clear.png";
        } else if(data['weather'][0]['main'] == "Clouds") {
          this.urlpic = "Clouds.png";
        } else if(data['weather'][0]['main'] == "Drizzle") {
          this.urlpic = "Drizzle.png";
        } else if(data['weather'][0]['main'] == "Mist") {
          this.urlpic = "Mist.png";
        } else if(data['weather'][0]['main'] == "Rain") {
          this.urlpic = "Rain.png";
        } else if(data['weather'][0]['main'] == "Snow") {
          this.urlpic = "Snow.png";
        } else if(data['weather'][0]['main'] == "Thunderstorm") {
          this.urlpic = "Thunderstorm.png";
        } else{
          this.urlpic = "Clear.png";
        }
        this.main = this.sanitizer.bypassSecurityTrustStyle(`url(assets/imgs/${this.urlpic})`);

      });
    }).catch((error) => {
      console.log(error);
      let alertMenu = this.alertCtrl.create({
        title: 'Aie!',
        subTitle: "Erreur chargement carte, merci de relancer l'application !",
        buttons: ['OK']
      });
      alertMenu.present();
      loading.dismiss();

    });
  }



  openPageInfo() {
    this.nav.setRoot(InfoPage);
  }


  openPageCarte() {
    this.nav.setRoot(HomePage);
  }

  openPagePicture() {
    this.nav.push(PicturePage);
  }
}
