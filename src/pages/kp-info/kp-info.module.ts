import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KpInfoPage } from './kp-info';

@NgModule({
  declarations: [
    KpInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(KpInfoPage),
  ],
})
export class KpInfoPageModule {}
