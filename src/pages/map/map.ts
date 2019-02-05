import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { LoadingController, ModalController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { AlertController } from 'ionic-angular';
import { HttpServiceProvider } from '../../providers/http-service/http-service';
import { MenuController } from 'ionic-angular';
import { AndroidFullScreen } from '@ionic-native/android-full-screen';

import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  Marker,
  LatLng,
  GoogleMapOptions,
  GoogleMapControlOptions,
  MarkerOptions,
  GoogleMapsAnimation,
  MyLocation,
  TileOverlayOptions,
  TileOverlay,
  MapType,
  GoogleMapsMapTypeId,
  // Environment
} from '@ionic-native/google-maps';
import { PicturePage } from '../picture/picture';


@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

  mapReady: boolean = false;
  map: GoogleMap;
  address: any;
  options: any;
  typeplan:any;
  mapTypeId: any;


  constructor( public loadingCtrl: LoadingController, private androidFullScreen: AndroidFullScreen, public menuCtrl: MenuController, public platform: Platform, public httpService: HttpServiceProvider,public navCtrl: NavController, private geolocation: Geolocation, public alertCtrl: AlertController) {  }

  // ionViewDidLoad(){
  //     this.loadMap();
  // }

  ionViewDidLoad(){
    this.platform.ready().then(() => {
      this.loadMap();
    });
  }



  onItemSelected(item) {
    this.map.setMapTypeId(GoogleMapsMapTypeId[item]);
  }

  loadMap(lat = 49, lng = 1, zoom = 10) {

    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: 47.6,
          lng: 1.44
        },
        zoom: 5,
        // tilt: 30
      }
    };

    this.map = GoogleMaps.create('map_canvas', mapOptions);

    this.map.addTileOverlaySync({
      getTile: (x: number, y: number, zoom: number) => {

        return "https://wxs.ign.fr/ufzn1f9gbzbmbxfy3whmpafm/geoportail/wmts?"+
        "layer=TRANSPORTS.DRONES.RESTRICTIONS&style=normal"+
        "&FORMAT=image/png&SERVICE=WMTS&VERSION=1.0.0"+
        "&REQUEST=GetTile&TILEMATRIXSET=PM"+
        "&TILEMATRIX="+zoom+"&TILEROW="+y+
        "&TILECOL="+x;
      }
    });
  }

  openPagePicture() {
    this.navCtrl.push(PicturePage);
  }

  openMenu() {
    this.menuCtrl.open();
  }

  search(address) {

    this.map.clear();
    //Récupérer les positions GPS à partir de l'adresse
    this.httpService.getPositionFromAddress({address : address})
    .then(data => {
      console.log(data);
      var lat = data[0]['lat'];
      var lng = data[0]['lon'];
      if(lng) {
        // Move the map camera to the location with animation
        this.map.animateCamera({
          target: {
            lat: data[0]['lat'],
            lng: data[0]['lon']
          },
          zoom: 14
          // tilt: 30
        })
        .then(() => {
          // add a marker
          let marker: Marker = this.map.addMarkerSync({
            title: 'Vous êtes ici !',
            snippet: 'Hey !',
            position: {
              lat: lat,
              lng: lng
            },
            animation: GoogleMapsAnimation.BOUNCE
          });

          this.map.addTileOverlaySync({
            getTile: (x: number, y: number, zoom: number) => {

              return "https://wxs.ign.fr/ufzn1f9gbzbmbxfy3whmpafm/geoportail/wmts?"+
              "layer=TRANSPORTS.DRONES.RESTRICTIONS&style=normal"+
              "&FORMAT=image/png&SERVICE=WMTS&VERSION=1.0.0"+
              "&REQUEST=GetTile&TILEMATRIXSET=PM"+
              "&TILEMATRIX="+zoom+"&TILEROW="+y+
              "&TILECOL="+x;
            }
          });

          // show the infoWindow
          marker.showInfoWindow();

        });


      } else {
        let alert = this.alertCtrl.create({
          title: 'Aie!',
          subTitle: 'Adresse introuvable 😱 !',
          buttons: ['OK']
        });
        alert.present();
      }
    });

  }

  geoloc() {


    this.map.clear();

    // Get the location of you
    this.map.getMyLocation()
    .then((location: MyLocation) => {
      console.log(JSON.stringify(location, null ,2));

      // Move the map camera to the location with animation
      this.map.animateCamera({
        target: location.latLng,
        zoom: 14
        // tilt: 30
      })
      .then(() => {
        // add a marker
        let marker: Marker = this.map.addMarkerSync({
          title: 'Vous êtes ici !',
          snippet: 'Hey !',
          position: location.latLng,
          animation: GoogleMapsAnimation.BOUNCE
        });

        this.map.addTileOverlaySync({
          getTile: (x: number, y: number, zoom: number) => {

            return "https://wxs.ign.fr/ufzn1f9gbzbmbxfy3whmpafm/geoportail/wmts?"+
            "layer=TRANSPORTS.DRONES.RESTRICTIONS&style=normal"+
            "&FORMAT=image/png&SERVICE=WMTS&VERSION=1.0.0"+
            "&REQUEST=GetTile&TILEMATRIXSET=PM"+
            "&TILEMATRIX="+zoom+"&TILEROW="+y+
            "&TILECOL="+x;
          }
        });

        // show the infoWindow
        marker.showInfoWindow();

      });
    });

  }

}
