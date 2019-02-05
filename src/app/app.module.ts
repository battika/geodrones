import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Geolocation } from '@ionic-native/geolocation';
import { HttpServiceProvider } from '../providers/http-service/http-service';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { Camera } from '@ionic-native/camera';
import { Device } from '@ionic-native/device';
import { IonicStorageModule } from '@ionic/storage';
import { AndroidFullScreen } from '@ionic-native/android-full-screen';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { GoogleMaps } from '@ionic-native/google-maps';


//Pages
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { InfoPage } from '../pages/info/info';
import { IntroPage } from '../pages/intro/intro';
import { PicturePage } from '../pages/picture/picture';
import { UploadPage } from '../pages/upload/upload';
import { KpInfoPage } from '../pages/kp-info/kp-info';
import { PicturesFromDatePage } from '../pages/pictures-from-date/pictures-from-date';
import { MapPage } from '../pages/map/map';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    InfoPage,
    PicturePage,
    UploadPage,
    IntroPage,
    KpInfoPage,
    PicturesFromDatePage,
    MapPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    IonicImageViewerModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    InfoPage,
    PicturePage,
    UploadPage,
    IntroPage,
    KpInfoPage,
    PicturesFromDatePage,
    MapPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    HttpServiceProvider,
    FileTransfer,
    FileTransferObject,
    File,
    Camera,
    Device,
    AndroidFullScreen,
    AndroidPermissions,
    GoogleMaps,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
