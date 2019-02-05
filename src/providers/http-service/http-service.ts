import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions} from '@angular/http';
import { Device } from '@ionic-native/device';

import 'rxjs/add/operator/map';

@Injectable()
export class HttpServiceProvider {
  meteo: any;
  address: any;
  pictures: any;
  picture: any;
  index_kp:any;

  constructor(private device: Device, public http: Http) {}

  getMeteo(form: any) {
    console.log(form);

    return new Promise(resolve => {
      var url = 'http://api.openweathermap.org/data/2.5/weather?appid=795acbcca36e8e6060de0e8f76d1a5d8&units=metric&lang=fr&lat='+ form.lat + '&lon=' + form.long;
      this.http.get(url)
      .subscribe(data => {
        console.log(data);
        this.meteo = data.json();
        resolve(this.meteo);
      }, data => {
        resolve({code: 'error'});
        console.log("Erreur connexion" + data);
      });
    });
  }

  getKp() {
    return new Promise(resolve => {
      var url = 'https://api.geodrones.fr/kp.php';
      this.http.get(url)
      .subscribe(data => {
        console.log(data);
        this.index_kp = data.json();
        resolve(this.index_kp);
      }, data => {
        resolve({code: 'error'});
        console.log("Erreur connexion" + data);
      });
    });
  }

  getPositionFromAddress(form: any) {
    return new Promise(resolve => {
      var url = 'https://nominatim.openstreetmap.org/search?q='+ form.address+'&format=json'


      // var url = 'https://maps.google.com/maps/api/geocode/json?address='+ form.address+'&key=AIzaSyC97ctvtgyCuBJpxt1ReEQUV5RBHpAoCj4';
      this.http.get(url)
      .subscribe(data => {
        this.address = data.json();
        resolve(this.address);
      }, data => {
        resolve({code: 'error'});
        console.log("Erreur connexion" + data);
      });
    });
  }

  get_pictures() {
    return new Promise(resolve => {
      var url = 'https://api.geodrones.fr/api.php?action=get_picture';
      this.http.get(url)
      .subscribe(data => {
        this.pictures = data.json();
        resolve(this.pictures);
      }, data => {
        resolve({code: 'error'});
        console.log("Erreur connexion" + data);
      });
    });
  }

  get_pictures_month() {
    return new Promise(resolve => {
      var url = 'https://api.geodrones.fr/api.php?action=get_picture_by_month';
      this.http.get(url)
      .subscribe(data => {
        this.pictures = data.json();
        resolve(this.pictures);
      }, data => {
        resolve({code: 'error'});
        console.log("Erreur connexion" + data);
      });
    });
  }

  get_pictures_from_date(date) {
    return new Promise(resolve => {
      var url = 'https://api.geodrones.fr/api.php?action=get_picture_where_date&date='+date;
      this.http.get(url)
      .subscribe(data => {
        this.pictures = data.json();
        resolve(this.pictures);
      }, data => {
        resolve({code: 'error'});
        console.log("Erreur connexion" + data);
      });
    });
  }

  SharePicture(form: any) {
    console.log(form);
    return new Promise(resolve => {
      var url = 'https://api.geodrones.fr/api.php?action=share_picture';
      var data = JSON.stringify({location: form.location, pseudo: form.pseudo, hash1: form.hash1, hash2: form.hash2, hash3: form.hash3, url: form.url});
      this.http.post(url, data)
      .subscribe(data => {
        this.picture = data.json();
        resolve(this.picture);
      }, data => {
        this.picture = data.json();
        resolve(this.picture);
      })
    })
  }

  vote(id_img) {
    console.log(id_img);
    return new Promise(resolve => {
      let headers = new Headers({ 'Content-Type': 'application/json' });
      var url = 'https://api.geodrones.fr/api.php?action=add_vote&id_img='+id_img+'&devise='+this.device.uuid;
      this.http.get(url)
      .subscribe(data => {
        this.picture = data.json();
        resolve(this.picture);
      }, data => {
        this.picture = data.json();
        resolve(this.picture);
      })
    })
  }

}
