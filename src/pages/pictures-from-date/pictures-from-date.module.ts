import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PicturesFromDatePage } from './pictures-from-date';

@NgModule({
  declarations: [
    PicturesFromDatePage,
  ],
  imports: [
    IonicPageModule.forChild(PicturesFromDatePage),
  ],
})
export class PicturesFromDatePageModule {}
