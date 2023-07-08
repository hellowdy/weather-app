import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { DateFormattingPipe } from '../pipes/date-formatting.pipe';
import { WindSpeedPipe } from '../pipes/wind-speed.pipe';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage,DateFormattingPipe, WindSpeedPipe ],
  exports: [DateFormattingPipe, WindSpeedPipe]
})
export class HomePageModule {}
