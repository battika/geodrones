webpackJsonp([6],{

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(62);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//Pages

var InfoPage = (function () {
    function InfoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
    }
    InfoPage.prototype.openPageHome = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    return InfoPage;
}());
InfoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-info',template:/*ion-inline-start:"/Applications/GeoDronesv2/src/pages/info/info.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Info</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card>\n  <img src="assets/imgs/splash3.png"/>\n  <ion-card-content>\n    <ion-card-title>\n      GeoDrones\n      </ion-card-title>\n    <p>\n      Cette application développé par Nicolas PLANCHET utilise les données IGN.\n      <br/>\n      <br/>\n      <br/>\n      <p><b>Changelog</b></p>\n        <p>1.0 : Première version de l\'app</p>\n        <p>1.1 : Optimisation (Réduction de la taille de l\'app), ajout recherche par Ville.\n        <p>1.2 : Nouvelle carte et modification design !\n        <p>1.3 : la meteo fait son apparition dans le menu.\n        <p>1.4 : Nous avons rajouté l\'altitude & la vue satellite.\n        <p>2.0 : Application complètement récoder avec ionic 3. (Plus fluide) & Nouveaux logos & Partagez vos plus belles prises de vue !\n    </p>\n\n    <button (click)="openPageHome()" ion-button full>Accueil</button>\n\n  </ion-card-content>\n\n</ion-card>\n</ion-content>\n'/*ion-inline-end:"/Applications/GeoDronesv2/src/pages/info/info.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]])
], InfoPage);

//# sourceMappingURL=info.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(62);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//Pages

var IntroPage = (function () {
    function IntroPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    IntroPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad IntroPage');
    };
    IntroPage.prototype.navHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    return IntroPage;
}());
IntroPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-intro',template:/*ion-inline-start:"/Applications/GeoDronesv2/src/pages/intro/intro.html"*/'<ion-content class="back">\n  <div class="backslide">\n    <div class="titlenav">Geodrones</div>\n\n    <p>Bienvenue sur GeoDrones v2 ! <br/><br/>\n\n    <ion-slides  pager="true">\n\n      <ion-slide>\n        <ion-icon ios="ios-camera" md="md-camera"></ion-icon>\n        <p>Vous pouvez désormais partager vos plus belles prises de vue !</p>\n        <br>\n      </ion-slide>\n\n      <ion-slide>\n        <ion-icon ios="ios-map" md="md-map"  item-left large></ion-icon>\n        <p>Voler en sécurité en consultant la carte des restrictions de vol.</p>\n          <br>\n      </ion-slide>\n      <br/>\n\n\n    </ion-slides>\n    <br/>\n\n    <div text-center>\n      <p>Pour partager vos plus belles photos, utilisez le bouton Partager présent dans le menu ! <br/><br/>\n\n      <button  ion-button outline small (click)="navHome()">\n        Démarrer !\n      </button>\n    </div>\n    <br/>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Applications/GeoDronesv2/src/pages/intro/intro.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]])
], IntroPage);

//# sourceMappingURL=intro.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PicturesFromDatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_service_http_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__upload_upload__ = __webpack_require__(71);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the PicturesFromDatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PicturesFromDatePage = (function () {
    function PicturesFromDatePage(toastCtrl, modalCtrl, httpService, navCtrl, navParams) {
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.httpService = httpService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        var date = navParams.get('date');
        var label = navParams.get('label');
        this.date = date;
        this.label = label;
    }
    PicturesFromDatePage.prototype.presentProfileModal = function () {
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__upload_upload__["a" /* UploadPage */]);
        profileModal.present();
    };
    PicturesFromDatePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.httpService.get_pictures_from_date(this.date)
            .then(function (data) {
            _this.pictures = data;
            console.log(_this.pictures);
        });
    };
    PicturesFromDatePage.prototype.vote = function (id_img) {
        var _this = this;
        this.httpService.vote(id_img)
            .then(function (data) {
            _this.res = data;
            if (_this.res.error == "NOK") {
                //Error message
                var toast = _this.toastCtrl.create({
                    message: 'Vous avez déjà voté pour cette photo.',
                    duration: 3000
                });
                toast.present();
            }
            else {
                _this.ionViewDidLoad();
                var toast = _this.toastCtrl.create({
                    message: 'Merci d\'avoir voté !',
                    duration: 3000
                });
                toast.present();
            }
            console.log(data);
        });
    };
    return PicturesFromDatePage;
}());
PicturesFromDatePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-pictures-from-date',template:/*ion-inline-start:"/Applications/GeoDronesv2/src/pages/pictures-from-date/pictures-from-date.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{label}}</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="presentProfileModal()">\n        <ion-icon ios="ios-add" md="md-add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="picture">\n\n  <ion-card class="card-pic" *ngFor="let picture of pictures">\n\n    <img src="{{picture.p_name}}" imageViewer/>\n\n    <ion-card-content>\n      <ion-item>\n        <ion-icon ios="ios-map" md="md-map"  item-start large></ion-icon>\n         <h2>{{picture.location}}</h2>\n         <p>{{picture.hashtag_1}} {{picture.hashtag_2}} {{picture.hashtag_3}}</p>\n       </ion-item>\n    </ion-card-content>\n\n    <ion-row>\n      <ion-col align-self-center text-center>\n        <ion-note>\n          {{picture.p_author}}\n        </ion-note>\n      </ion-col>\n    <ion-col>\n      <button  (click)="vote(picture.p_id)" ion-button icon-start clear small>\n        <ion-icon name="heart"></ion-icon>\n        <div>{{picture.p_vote}} Likes</div>\n      </button>\n    </ion-col>\n    <ion-col align-self-center text-center>\n      <ion-note>\n        {{picture.p_date}}\n      </ion-note>\n    </ion-col>\n  </ion-row>\n\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Applications/GeoDronesv2/src/pages/pictures-from-date/pictures-from-date.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__providers_http_service_http_service__["a" /* HttpServiceProvider */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__providers_http_service_http_service__["a" /* HttpServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]])
], PicturesFromDatePage);

//# sourceMappingURL=pictures-from-date.js.map

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_service_http_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_android_full_screen__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_maps__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__picture_picture__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MapPage = (function () {
    function MapPage(loadingCtrl, androidFullScreen, menuCtrl, platform, httpService, navCtrl, geolocation, alertCtrl) {
        this.loadingCtrl = loadingCtrl;
        this.androidFullScreen = androidFullScreen;
        this.menuCtrl = menuCtrl;
        this.platform = platform;
        this.httpService = httpService;
        this.navCtrl = navCtrl;
        this.geolocation = geolocation;
        this.alertCtrl = alertCtrl;
        this.mapReady = false;
    }
    // ionViewDidLoad(){
    //     this.loadMap();
    // }
    MapPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.loadMap();
        });
    };
    MapPage.prototype.onItemSelected = function (item) {
        this.map.setMapTypeId(__WEBPACK_IMPORTED_MODULE_5__ionic_native_google_maps__["c" /* GoogleMapsMapTypeId */][item]);
    };
    MapPage.prototype.loadMap = function (lat, lng, zoom) {
        if (lat === void 0) { lat = 49; }
        if (lng === void 0) { lng = 1; }
        if (zoom === void 0) { zoom = 10; }
        var mapOptions = {
            camera: {
                target: {
                    lat: 47.6,
                    lng: 1.44
                },
                zoom: 5,
            }
        };
        this.map = __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_maps__["a" /* GoogleMaps */].create('map_canvas', mapOptions);
        this.map.addTileOverlaySync({
            getTile: function (x, y, zoom) {
                return "https://wxs.ign.fr/ufzn1f9gbzbmbxfy3whmpafm/geoportail/wmts?" +
                    "layer=TRANSPORTS.DRONES.RESTRICTIONS&style=normal" +
                    "&FORMAT=image/png&SERVICE=WMTS&VERSION=1.0.0" +
                    "&REQUEST=GetTile&TILEMATRIXSET=PM" +
                    "&TILEMATRIX=" + zoom + "&TILEROW=" + y +
                    "&TILECOL=" + x;
            }
        });
    };
    MapPage.prototype.openPagePicture = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__picture_picture__["a" /* PicturePage */]);
    };
    MapPage.prototype.openMenu = function () {
        this.menuCtrl.open();
    };
    MapPage.prototype.search = function (address) {
        var _this = this;
        this.map.clear();
        //Récupérer les positions GPS à partir de l'adresse
        this.httpService.getPositionFromAddress({ address: address })
            .then(function (data) {
            console.log(data);
            var lat = data[0]['lat'];
            var lng = data[0]['lon'];
            if (lng) {
                // Move the map camera to the location with animation
                _this.map.animateCamera({
                    target: {
                        lat: data[0]['lat'],
                        lng: data[0]['lon']
                    },
                    zoom: 14
                    // tilt: 30
                })
                    .then(function () {
                    // add a marker
                    var marker = _this.map.addMarkerSync({
                        title: 'Vous êtes ici !',
                        snippet: 'Hey !',
                        position: {
                            lat: lat,
                            lng: lng
                        },
                        animation: __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_maps__["b" /* GoogleMapsAnimation */].BOUNCE
                    });
                    _this.map.addTileOverlaySync({
                        getTile: function (x, y, zoom) {
                            return "https://wxs.ign.fr/ufzn1f9gbzbmbxfy3whmpafm/geoportail/wmts?" +
                                "layer=TRANSPORTS.DRONES.RESTRICTIONS&style=normal" +
                                "&FORMAT=image/png&SERVICE=WMTS&VERSION=1.0.0" +
                                "&REQUEST=GetTile&TILEMATRIXSET=PM" +
                                "&TILEMATRIX=" + zoom + "&TILEROW=" + y +
                                "&TILECOL=" + x;
                        }
                    });
                    // show the infoWindow
                    marker.showInfoWindow();
                });
            }
            else {
                var alert_1 = _this.alertCtrl.create({
                    title: 'Aie!',
                    subTitle: 'Adresse introuvable 😱 !',
                    buttons: ['OK']
                });
                alert_1.present();
            }
        });
    };
    MapPage.prototype.geoloc = function () {
        var _this = this;
        this.map.clear();
        // Get the location of you
        this.map.getMyLocation()
            .then(function (location) {
            console.log(JSON.stringify(location, null, 2));
            // Move the map camera to the location with animation
            _this.map.animateCamera({
                target: location.latLng,
                zoom: 14
                // tilt: 30
            })
                .then(function () {
                // add a marker
                var marker = _this.map.addMarkerSync({
                    title: 'Vous êtes ici !',
                    snippet: 'Hey !',
                    position: location.latLng,
                    animation: __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_maps__["b" /* GoogleMapsAnimation */].BOUNCE
                });
                _this.map.addTileOverlaySync({
                    getTile: function (x, y, zoom) {
                        return "https://wxs.ign.fr/ufzn1f9gbzbmbxfy3whmpafm/geoportail/wmts?" +
                            "layer=TRANSPORTS.DRONES.RESTRICTIONS&style=normal" +
                            "&FORMAT=image/png&SERVICE=WMTS&VERSION=1.0.0" +
                            "&REQUEST=GetTile&TILEMATRIXSET=PM" +
                            "&TILEMATRIX=" + zoom + "&TILEROW=" + y +
                            "&TILECOL=" + x;
                    }
                });
                // show the infoWindow
                marker.showInfoWindow();
            });
        });
    };
    return MapPage;
}());
MapPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-map',template:/*ion-inline-start:"/Applications/GeoDronesv2/src/pages/map/map.html"*/'<ion-header></ion-header>\n<ion-content style="background: none transparent;">\n\n  <ion-card style="position: absolute; z-index: 10;margin-top:15%">\n\n    <ion-list>\n      <ion-item>\n        <ion-input size="3" type=\'text\' placeholder="Ville" name="address" [(ngModel)]="address" clearInput></ion-input>\n        <button ion-button item-left clear (click)=\'openMenu()\'>\n          <ion-icon style="font-size: 20px" name="menu"></ion-icon>\n        </button>\n        <button ion-button item-right clear (click)=\'search(address)\'>\n          <ion-icon style="font-size: 20px" ios="ios-search" md="md-search"></ion-icon>\n        </button>\n        <button ion-button item-right clear (click)=\'geoloc()\'>\n          <ion-icon style="font-size: 20px" ios="ios-pin" md="md-pin"></ion-icon>\n        </button>\n        <button ion-button item-right clear (click)="openPagePicture()">\n          <ion-icon style="font-size: 20px" ios="ios-image" md="md-image"></ion-icon>\n        </button>\n      </ion-item>\n    </ion-list>\n\n  </ion-card>\n  <div #map_canvas id="map_canvas"></div>\n\n  <div style="z-index:9; position: absolute; bottom: 5px; left: 0px;width:150px;text-align:center;background:none;box-shadow:none ;margin-left: 10px;">\n   <ion-list radio-group  [(ngModel)]="typeplan" name="typeplan">\n   <ion-item>\n     <ion-label>Plan</ion-label>\n     <ion-radio  (ionSelect)="onItemSelected(\'ROADMAP\')"></ion-radio>\n   </ion-item>\n   <ion-item>\n     <ion-label>Satellite</ion-label>\n     <ion-radio (ionSelect)="onItemSelected(\'SATELLITE\')" ></ion-radio>\n   </ion-item>\n   <ion-item>\n     <ion-label>Hybrid</ion-label>\n     <ion-radio (ionSelect)="onItemSelected(\'HYBRID\')" ></ion-radio>\n   </ion-item>\n   </ion-list>\n</div>\n\n\n  <div id="legend" style="z-index:11; position: absolute; bottom: 10px; right: 0px;background-color:white"><h3>Légende</h3><div><img width="15px" src="assets/imgs/interdit.png"> Zone interdite</div><div><img width="15px" src="assets/imgs/30m.png"> Zone 30m</div><div><img width="15px" src="assets/imgs/50m.png"> Zone 50m</div><div><img width="15px" src="assets/imgs/100m.png"> Zone 100m</div>\n</div>\n\n</ion-content>\n'/*ion-inline-end:"/Applications/GeoDronesv2/src/pages/map/map.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_android_full_screen__["a" /* AndroidFullScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__providers_http_service_http_service__["a" /* HttpServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], MapPage);

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KpInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the KpInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var KpInfoPage = (function () {
    function KpInfoPage(viewCtrl, navCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    KpInfoPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    KpInfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad KpInfoPage');
    };
    return KpInfoPage;
}());
KpInfoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-kp-info',template:/*ion-inline-start:"/Applications/GeoDronesv2/src/pages/kp-info/kp-info.html"*/'<ion-content class="picture">\n\n  <ion-card class="kp">\n    <img src="http://services.swpc.noaa.gov/images/planetary-k-index.gif"/>\n    <ion-card-content>\n      <ion-card-title>\n        Indice KP c\'est quoi ?\n      </ion-card-title>\n      <p>L’indice-K (ou K-index) est utilisé pour quantifier les perturbations du champ magnétique terrestre.</p>\n      <p>Il varie sur une échelle de zéro à 9. Le bas de l’échelle caractérise un état calme alors que le haut une tempête solaire. L’indice-K se base sur les maxima des fluctuations (magnétiques) horizontales observées sur un magnétomètre durant une période de 3 heures.</p>\n      <br/>\n      <p>Pour être plus simple, on considère qu’un niveau d’indice-K inférieur à 4, correspond à un état “stable” (non perturbé), alors que lorsqu’il est égal à 4 on parle d’état perturbé. Une valeur au dessus de 4, caractérise une tempête solaire.</p>\n      <small>Définition par altigator.com</small>\n      <br/>\n      <button (click)="closeModal()" ion-button full>Retour à la carte</button>\n\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Applications/GeoDronesv2/src/pages/kp-info/kp-info.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]])
], KpInfoPage);

//# sourceMappingURL=kp-info.js.map

/***/ }),

/***/ 149:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 149;

/***/ }),

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/intro/intro.module": [
		427,
		5
	],
	"../pages/kp-info/kp-info.module": [
		428,
		4
	],
	"../pages/map/map.module": [
		430,
		3
	],
	"../pages/picture/picture.module": [
		429,
		2
	],
	"../pages/pictures-from-date/pictures-from-date.module": [
		431,
		1
	],
	"../pages/upload/upload.module": [
		432,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 192;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(272);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_http_service_http_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_transfer__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_file__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_camera__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_device__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_storage__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_android_full_screen__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_android_permissions__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ionic_img_viewer__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_google_maps__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__app_component__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_home_home__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_info_info__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_intro_intro__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_picture_picture__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_upload_upload__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_kp_info_kp_info__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_pictures_from_date_pictures_from_date__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_map_map__ = __webpack_require__(138);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















//Pages









var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_17__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_18__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_info_info__["a" /* InfoPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_picture_picture__["a" /* PicturePage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_upload_upload__["a" /* UploadPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_intro_intro__["a" /* IntroPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_kp_info_kp_info__["a" /* KpInfoPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_pictures_from_date_pictures_from_date__["a" /* PicturesFromDatePage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_map_map__["a" /* MapPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_17__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/intro/intro.module#IntroPageModule', name: 'IntroPage', segment: 'intro', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/kp-info/kp-info.module#KpInfoPageModule', name: 'KpInfoPage', segment: 'kp-info', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/picture/picture.module#PicturePageModule', name: 'PicturePage', segment: 'picture', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/map/map.module#MapPageModule', name: 'MapPage', segment: 'map', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/pictures-from-date/pictures-from-date.module#PicturesFromDatePageModule', name: 'PicturesFromDatePage', segment: 'pictures-from-date', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/upload/upload.module#UploadPageModule', name: 'UploadPage', segment: 'upload', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_12__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_15_ionic_img_viewer__["a" /* IonicImageViewerModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_17__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_18__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_info_info__["a" /* InfoPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_picture_picture__["a" /* PicturePage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_upload_upload__["a" /* UploadPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_intro_intro__["a" /* IntroPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_kp_info_kp_info__["a" /* KpInfoPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_pictures_from_date_pictures_from_date__["a" /* PicturesFromDatePage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_map_map__["a" /* MapPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_7__providers_http_service_http_service__["a" /* HttpServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_transfer__["b" /* FileTransferObject */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_device__["a" /* Device */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_android_full_screen__["a" /* AndroidFullScreen */],
            __WEBPACK_IMPORTED_MODULE_14__ionic_native_android_permissions__["a" /* AndroidPermissions */],
            __WEBPACK_IMPORTED_MODULE_16__ionic_native_google_maps__["a" /* GoogleMaps */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* IonicErrorHandler */] },
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_http_service_http_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_android_permissions__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_info_info__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_picture_picture__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_intro_intro__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_kp_info_kp_info__ = __webpack_require__(139);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










//Pages





var MyApp = (function () {
    function MyApp(modalCtrl, androidPermissions, loadingCtrl, sanitizer, httpService, platform, statusBar, splashScreen, geolocation, alertCtrl, storage) {
        this.modalCtrl = modalCtrl;
        this.androidPermissions = androidPermissions;
        this.loadingCtrl = loadingCtrl;
        this.sanitizer = sanitizer;
        this.httpService = httpService;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.geolocation = geolocation;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
    }
    MyApp.prototype.ngOnInit = function () {
    };
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.storage.get('intro-done').then(function (done) {
                // enableProdMode();
                if (!done) {
                    _this.storage.set('intro-done', true);
                    _this.nav.push(__WEBPACK_IMPORTED_MODULE_12__pages_intro_intro__["a" /* IntroPage */]);
                }
            });
            _this.splashScreen.hide();
            _this.getMeteo();
        });
    };
    MyApp.prototype.OpenKPInfo = function () {
        var kpinfo = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_13__pages_kp_info_kp_info__["a" /* KpInfoPage */]);
        kpinfo.present();
    };
    MyApp.prototype.getMeteo = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Merci de patienter...'
        });
        loading.present();
        setTimeout(function () {
            loading.dismiss();
        }, 5000);
        this.options = {
            enableHighAccuracy: true
        };
        this.geolocation.getCurrentPosition(this.options).then(function (resp) {
            console.log(resp);
            if (resp.coords.altitude != null) {
                _this.alti = Number((resp.coords.altitude).toFixed(1));
            }
            else {
                _this.alti = "0";
            }
            _this.httpService.getKp()
                .then(function (data) {
                _this.kp = data[1];
                console.log(data);
            });
            //Récupérer les positions GPS à partir de l'adresse
            _this.httpService.getMeteo({ lat: resp.coords.latitude, long: resp.coords.longitude })
                .then(function (data) {
                loading.dismiss();
                _this.city = data['name'];
                _this.meteo_description = data['weather'][0]['description'];
                _this.temp = Number((data['main']['temp']).toFixed(1));
                _this.windspeed = Number((data['wind']['speed']).toFixed(1));
                _this.humidity = data['main']['humidity'];
                var deg = data['wind']['deg'];
                var cardinal;
                if ((deg >= 0 && deg <= 11.25) || (deg > 348.75 && deg <= 360)) {
                    cardinal = 'N';
                }
                else if (deg > 11.25 && deg <= 33.75) {
                    cardinal = 'NNE';
                }
                else if (deg > 33.75 && deg <= 56.25) {
                    cardinal = 'NE';
                }
                else if (deg > 56.25 && deg <= 78.75) {
                    cardinal = 'ENE';
                }
                else if (deg > 78.75 && deg <= 101.25) {
                    cardinal = 'E';
                }
                else if (deg > 101.25 && deg <= 123.75) {
                    cardinal = 'ESE';
                }
                else if (deg > 123.75 && deg <= 146.25) {
                    cardinal = 'SE';
                }
                else if (deg > 146.25 && deg <= 168.75) {
                    cardinal = 'SSE';
                }
                else if (deg > 168.75 && deg <= 191.25) {
                    cardinal = 'S';
                }
                else if (deg > 191.25 && deg <= 213.75) {
                    cardinal = 'SSW';
                }
                else if (deg > 213.75 && deg <= 236.25) {
                    cardinal = 'SW';
                }
                else if (deg > 236.25 && deg <= 258.75) {
                    cardinal = 'WSW';
                }
                else if (deg > 258.75 && deg <= 281.25) {
                    cardinal = 'W';
                }
                else if (deg > 281.25 && deg <= 303.75) {
                    cardinal = 'WNW';
                }
                else if (deg > 303.75 && deg <= 326.25) {
                    cardinal = 'NW';
                }
                else if (deg > 326.25 && deg <= 348.75) {
                    cardinal = 'NNW';
                }
                _this.cardinal = cardinal;
                _this.winddeg = deg;
                if (data['weather'][0]['main'] == "Clear") {
                    _this.urlpic = "Clear.png";
                }
                else if (data['weather'][0]['main'] == "Clouds") {
                    _this.urlpic = "Clouds.png";
                }
                else if (data['weather'][0]['main'] == "Drizzle") {
                    _this.urlpic = "Drizzle.png";
                }
                else if (data['weather'][0]['main'] == "Mist") {
                    _this.urlpic = "Mist.png";
                }
                else if (data['weather'][0]['main'] == "Rain") {
                    _this.urlpic = "Rain.png";
                }
                else if (data['weather'][0]['main'] == "Snow") {
                    _this.urlpic = "Snow.png";
                }
                else if (data['weather'][0]['main'] == "Thunderstorm") {
                    _this.urlpic = "Thunderstorm.png";
                }
                else {
                    _this.urlpic = "Clear.png";
                }
                _this.main = _this.sanitizer.bypassSecurityTrustStyle("url(assets/imgs/" + _this.urlpic + ")");
            });
        }).catch(function (error) {
            console.log(error);
            var alertMenu = _this.alertCtrl.create({
                title: 'Aie!',
                subTitle: "Erreur chargement carte, merci de relancer l'application !",
                buttons: ['OK']
            });
            alertMenu.present();
            loading.dismiss();
        });
    };
    MyApp.prototype.openPageInfo = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_10__pages_info_info__["a" /* InfoPage */]);
    };
    MyApp.prototype.openPageCarte = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */]);
    };
    MyApp.prototype.openPagePicture = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_11__pages_picture_picture__["a" /* PicturePage */]);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Applications/GeoDronesv2/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-content [style.background-image]="main" style="background-size: cover;background-position: center">\n\n    <!-- <ion-header>\n    <div class="titlenav">GeoDrones</div>\n  </ion-header> -->\n  <div class="meteo">\n    <div class="titlenav">GeoDrones</div>\n    <div class="localisation">{{city}}</div>\n    <div class="localisation"><i>{{meteo_description}}</i></div>\n\n    <div class="deg"> {{temp}}°C</div>\n    <!-- <br/> -->\n    <div class="row" style="padding-top:2%">\n      <div class="col" style="padding-top:10%;margin-left:2%"><img  src="assets/imgs/vent-icon.png"/></div>\n      <ion-col col-8><div class="wind">Vent <div class="meteoinfo">{{windspeed}}<small>km/h</small><br/><div *ngIf="winddeg!==undefined">{{winddeg}}° ({{cardinal}})</div></div></div> </ion-col>\n    </div>\n\n    <div class="row" style="padding-top:2%">\n      <div class="col" style="margin-left:3%"><img src="assets/imgs/humidite-icon.png"/></div>\n      <ion-col col-8><div class="humidity"> Humidité <div class="meteoinfo">{{humidity}}%</div></div>    </ion-col>\n    </div>\n\n    <div class="row" style="padding-top:5%">\n      <div class="col" style="padding-top:10%;margin-left:2%"><img  src="assets/imgs/altitude-icon.png"/></div>\n      <ion-col col-8><div class="wind">Altitude <div class="meteoinfo">{{alti}}<small>m</small></div></div> </ion-col>\n    </div>\n\n    <div class="row" style="padding-top:5%">\n      <div class="col" style="padding-top:5%;margin-left:2%"><img  src="assets/imgs/aimant-icon.png"/></div>\n      <ion-col col-8>\n        <div class="wind">Indice KP\n          <button style="position: absolute; z-index: 10"  ion-button icon-only (click)="OpenKPInfo()" clear>\n              <ion-icon ios="ios-help-circle" md="md-help-circle" style="color:white"></ion-icon>\n            </button>\n\n          <div class="meteoinfo">\n            {{kp}}\n          </div>\n\n        </div>\n\n      </ion-col>\n    </div>\n\n  </div>\n</ion-content>\n\n<ion-footer >\n  <ion-toolbar transparent >\n    <ion-buttons style="color:white">\n      <button (click)="openPageCarte()" menuClose ion-button icon-right style="color:white" >\n        Home\n        <ion-icon ios="ios-map" md="md-map"  item-left large></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons end>\n      <button (click)="openPagePicture()" menuClose ion-button icon-right style="color:white">\n        Partage\n        <ion-icon ios="ios-image" md="md-image"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons end>\n      <button (click)="getMeteo()" ion-button icon-right style="color:white">\n        <ion-icon ios="ios-refresh" md="md-refresh"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons end>\n      <button (click)="openPageInfo()" menuClose ion-button icon-right style="color:white">\n        <ion-icon ios="ios-help-circle" md="md-help-circle"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/Applications/GeoDronesv2/src/app/app.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_5__providers_http_service_http_service__["a" /* HttpServiceProvider */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ModalController */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_android_permissions__["a" /* AndroidPermissions */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_5__providers_http_service_http_service__["a" /* HttpServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_device__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HttpServiceProvider = (function () {
    function HttpServiceProvider(device, http) {
        this.device = device;
        this.http = http;
    }
    HttpServiceProvider.prototype.getMeteo = function (form) {
        var _this = this;
        console.log(form);
        return new Promise(function (resolve) {
            var url = 'http://api.openweathermap.org/data/2.5/weather?appid=795acbcca36e8e6060de0e8f76d1a5d8&units=metric&lang=fr&lat=' + form.lat + '&lon=' + form.long;
            _this.http.get(url)
                .subscribe(function (data) {
                console.log(data);
                _this.meteo = data.json();
                resolve(_this.meteo);
            }, function (data) {
                resolve({ code: 'error' });
                console.log("Erreur connexion" + data);
            });
        });
    };
    HttpServiceProvider.prototype.getKp = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var url = 'https://api.geodrones.fr/kp.php';
            _this.http.get(url)
                .subscribe(function (data) {
                console.log(data);
                _this.index_kp = data.json();
                resolve(_this.index_kp);
            }, function (data) {
                resolve({ code: 'error' });
                console.log("Erreur connexion" + data);
            });
        });
    };
    HttpServiceProvider.prototype.getPositionFromAddress = function (form) {
        var _this = this;
        return new Promise(function (resolve) {
            var url = 'https://nominatim.openstreetmap.org/search?q=' + form.address + '&format=json';
            // var url = 'https://maps.google.com/maps/api/geocode/json?address='+ form.address+'&key=AIzaSyC97ctvtgyCuBJpxt1ReEQUV5RBHpAoCj4';
            _this.http.get(url)
                .subscribe(function (data) {
                _this.address = data.json();
                resolve(_this.address);
            }, function (data) {
                resolve({ code: 'error' });
                console.log("Erreur connexion" + data);
            });
        });
    };
    HttpServiceProvider.prototype.get_pictures = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var url = 'https://api.geodrones.fr/api.php?action=get_picture';
            _this.http.get(url)
                .subscribe(function (data) {
                _this.pictures = data.json();
                resolve(_this.pictures);
            }, function (data) {
                resolve({ code: 'error' });
                console.log("Erreur connexion" + data);
            });
        });
    };
    HttpServiceProvider.prototype.get_pictures_month = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var url = 'https://api.geodrones.fr/api.php?action=get_picture_by_month';
            _this.http.get(url)
                .subscribe(function (data) {
                _this.pictures = data.json();
                resolve(_this.pictures);
            }, function (data) {
                resolve({ code: 'error' });
                console.log("Erreur connexion" + data);
            });
        });
    };
    HttpServiceProvider.prototype.get_pictures_from_date = function (date) {
        var _this = this;
        return new Promise(function (resolve) {
            var url = 'https://api.geodrones.fr/api.php?action=get_picture_where_date&date=' + date;
            _this.http.get(url)
                .subscribe(function (data) {
                _this.pictures = data.json();
                resolve(_this.pictures);
            }, function (data) {
                resolve({ code: 'error' });
                console.log("Erreur connexion" + data);
            });
        });
    };
    HttpServiceProvider.prototype.SharePicture = function (form) {
        var _this = this;
        console.log(form);
        return new Promise(function (resolve) {
            var url = 'https://api.geodrones.fr/api.php?action=share_picture';
            var data = JSON.stringify({ location: form.location, pseudo: form.pseudo, hash1: form.hash1, hash2: form.hash2, hash3: form.hash3, url: form.url });
            _this.http.post(url, data)
                .subscribe(function (data) {
                _this.picture = data.json();
                resolve(_this.picture);
            }, function (data) {
                _this.picture = data.json();
                resolve(_this.picture);
            });
        });
    };
    HttpServiceProvider.prototype.vote = function (id_img) {
        var _this = this;
        console.log(id_img);
        return new Promise(function (resolve) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
            var url = 'https://api.geodrones.fr/api.php?action=add_vote&id_img=' + id_img + '&devise=' + _this.device.uuid;
            _this.http.get(url)
                .subscribe(function (data) {
                _this.picture = data.json();
                resolve(_this.picture);
            }, function (data) {
                _this.picture = data.json();
                resolve(_this.picture);
            });
        });
    };
    return HttpServiceProvider;
}());
HttpServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_device__["a" /* Device */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], HttpServiceProvider);

//# sourceMappingURL=http-service.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PicturePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_service_http_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__upload_upload__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pictures_from_date_pictures_from_date__ = __webpack_require__(137);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//pages


var PicturePage = (function () {
    function PicturePage(modalCtrl, httpService, navCtrl, navParams) {
        this.modalCtrl = modalCtrl;
        this.httpService = httpService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PicturePage.prototype.presentProfileModal = function () {
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__upload_upload__["a" /* UploadPage */]);
        profileModal.present();
    };
    PicturePage.prototype.openPictures = function (date, mois, annee) {
        var label = mois + " " + annee;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pictures_from_date_pictures_from_date__["a" /* PicturesFromDatePage */], {
            date: date,
            label: label
        });
    };
    PicturePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.httpService.get_pictures_month()
            .then(function (data) {
            _this.pictures = data;
            console.log(_this.pictures);
        });
    };
    return PicturePage;
}());
PicturePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-picture',template:/*ion-inline-start:"/Applications/GeoDronesv2/src/pages/picture/picture.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>GeoDrones</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="presentProfileModal()">\n        <ion-icon ios="ios-add" md="md-add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="card-background-page picture">\n  <!-- <button class="menu" clear="true" ion-button menuToggle>\n    <ion-icon name="menu"></ion-icon>\n  </button><br/><br/><br/> -->\n\n  <ion-card (click)="openPictures(picture.dateforwhere, picture.mois, picture.annee)"  *ngFor="let picture of pictures">\n    <img src="{{picture.p_name}}"/>\n    <div class="card-title">{{picture.mois}} {{picture.annee}}</div>\n    <div class="card-subtitle">{{picture.nb_photos}} photos</div>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Applications/GeoDronesv2/src/pages/picture/picture.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__providers_http_service_http_service__["a" /* HttpServiceProvider */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__providers_http_service_http_service__["a" /* HttpServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]])
], PicturePage);

//# sourceMappingURL=picture.js.map

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_service_http_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_android_full_screen__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__picture_picture__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__map_map__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__info_info__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var HomePage = (function () {
    function HomePage(loadingCtrl, androidFullScreen, menuCtrl, platform, httpService, navCtrl, geolocation, alertCtrl) {
        this.loadingCtrl = loadingCtrl;
        this.androidFullScreen = androidFullScreen;
        this.menuCtrl = menuCtrl;
        this.platform = platform;
        this.httpService = httpService;
        this.navCtrl = navCtrl;
        this.geolocation = geolocation;
        this.alertCtrl = alertCtrl;
    }
    HomePage.prototype.openPagePicture = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__picture_picture__["a" /* PicturePage */]);
    };
    HomePage.prototype.openMap = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__map_map__["a" /* MapPage */]);
    };
    HomePage.prototype.openPageInfo = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__info_info__["a" /* InfoPage */]);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Applications/GeoDronesv2/src/pages/home/home.html"*/'<ion-content class="card-background-page backg" >\n\n  <div style="padding:8px;margin-top:15px">\n    <div class="titleapp">Bienvenue sur Geodrones</div>\n    <div class="subtitleapp">Votre assistant de vol</div>\n\n    <ion-card (click)="openMap()">\n      <img src="assets/imgs/carte.png"/>\n      <div class="card-title" style="color:white">\n        <ion-icon style="font-size:100px" ios="ios-map" md="md-map"  item-start large></ion-icon>\n      </div>\n      <ion-row class="cardfooter" style="background-color:white">\n        <ion-col>\n          <div style="font-family: \'Roboto-Light\';font-size:16px" class="text-center">Carte des restrictions</div>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n    <ion-card (click)="openPagePicture()">\n      <img src="assets/imgs/DJI_0008.JPG"/>\n      <div class="card-title" style="color:white">\n        <ion-icon style="font-size:100px" ios="ios-image" md="md-image" item-start large></ion-icon>\n      </div>\n      <ion-row class="cardfooter">\n        <ion-col>\n          <div style="font-family: \'Roboto-Light\';font-size:16px"  class="text-center">Meilleurs prises..</div>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n\n  </div>\n\n  <ion-toolbar transparent>\n    <ion-buttons style="color:black">\n      <button menuToggle ion-button icon-right style="color:black" >\n        Meteo\n        <ion-icon ios="ios-sunny" md="md-sunny"  item-left large></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons end>\n      <button (click)="openPageInfo()" menuClose ion-button icon-right style="color:black">\n        <ion-icon ios="ios-help-circle" md="md-help-circle"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n\n</ion-content>\n'/*ion-inline-end:"/Applications/GeoDronesv2/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_android_full_screen__["a" /* AndroidFullScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__providers_http_service_http_service__["a" /* HttpServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_transfer__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_http_service_http_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_device__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the UploadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UploadPage = (function () {
    function UploadPage(device, alertCtrl, httpService, transfer, file, camera, loadingCtrl, toastCtrl, modalCtrl, navCtrl, navParams, viewCtrl) {
        this.device = device;
        this.alertCtrl = alertCtrl;
        this.httpService = httpService;
        this.transfer = transfer;
        this.file = file;
        this.camera = camera;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    UploadPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UploadPage');
    };
    UploadPage.prototype.getImage = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
        };
        this.camera.getPicture(options).then(function (imageData) {
            console.log(imageData);
            _this.imageURI = imageData;
        }, function (err) {
            console.log(err);
        });
    };
    UploadPage.prototype.Upload = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Upload en cours...'
        });
        loading.present();
        setTimeout(function () {
            loading.dismiss();
        }, 5000);
        if (this.location != "" && this.pseudo != "" && this.hash1 != "" && this.hash2 != "" && this.hash3 != "" && this.url_pic != "") {
            var fileTransfer = this.transfer.create();
            var options = {
                fileKey: "file",
                fileName: this.imageURI,
                chunkedMode: false,
                mimeType: "multipart/form-data",
                params: { 'location': this.location, 'pseudo': this.pseudo, 'hash1': this.hash1, 'hash2': this.hash2, 'hash3': this.hash3, 'url': this.url_pic, 'devise': this.device.uuid },
                headers: {}
            };
            fileTransfer.upload(this.imageURI, 'https://api.geodrones.fr/api.php?action=upload_img', options)
                .then(function (status) {
                var alert = _this.alertCtrl.create({
                    title: 'GeoDrones',
                    subTitle: 'Merci, la photo sera publié prochainement !',
                    buttons: ['OK']
                });
                alert.present();
                loading.dismiss();
                _this.viewCtrl.dismiss();
            }, function (err) {
                var alert = _this.alertCtrl.create({
                    title: 'Aie!',
                    subTitle: 'Erreur 😱 !',
                    buttons: ['OK']
                });
                alert.present();
                console.log(err);
            });
        }
        else {
            var alert_1 = this.alertCtrl.create({
                title: 'Aie!',
                subTitle: 'Merci de remplir tous les champs 😱 !',
                buttons: ['OK']
            });
            alert_1.present();
        }
    };
    UploadPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    return UploadPage;
}());
UploadPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-upload',template:/*ion-inline-start:"/Applications/GeoDronesv2/src/pages/upload/upload.html"*/'<ion-content class="picture">\n  <button class="menu" clear="true" ion-button (click)="closeModal()">\n    <ion-icon ios="ios-close" md="md-close"></ion-icon>\n  </button>\n  <br/>\n  <ion-card class="button_modal" >\n    <ion-card-header>\n       Partagez une photo sur GeoDrones\n     </ion-card-header>\n    <ion-item>\n      <ion-label stacked>Lieu de prise de vue</ion-label>\n      <ion-input type="text"  name="location" [(ngModel)]="location" required></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked>Pseudo</ion-label>\n      <ion-input type="text"  name="pseudo" [(ngModel)]="pseudo" required></ion-input>\n    </ion-item>\n    <hr>\n    <ion-card-content>\n      Caractérisez votre prise de vue par 3 hashtags\n    </ion-card-content>\n    <ion-item>\n      <ion-label stacked>Hashtag 1</ion-label>\n      <ion-input type="text" name="hash1" [(ngModel)]="hash1" placeholder="#Ville" required></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked>Hashtag 2</ion-label>\n      <ion-input type="text" name="hash2" [(ngModel)]="hash2" placeholder="#Soleil" required></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked>Hashtag 3</ion-label>\n      <ion-input type="text" name="hash2" [(ngModel)]="hash3" placeholder="#OMG" required></ion-input>\n    </ion-item>\n    <hr>\n    <ion-card-content>\n      Les partages d\'images sont soumis à une validation, merci de respecter la vie privée de chacun et de ne pas publier des photos de lieux privés.\n  </ion-card-content>\n  <hr>\n  <button ion-button (click)="getImage()" full color="light">Selectionner l\'image à partager</button>\n  <button ion-button (click)="Upload()" full>Partager</button>\n  </ion-card>\n\n\n</ion-content>\n'/*ion-inline-end:"/Applications/GeoDronesv2/src/pages/upload/upload.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_5__providers_http_service_http_service__["a" /* HttpServiceProvider */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__ionic_native_device__["a" /* Device */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5__providers_http_service_http_service__["a" /* HttpServiceProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* ViewController */]])
], UploadPage);

//# sourceMappingURL=upload.js.map

/***/ })

},[264]);
//# sourceMappingURL=main.js.map