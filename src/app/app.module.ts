import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { MyApp } from './app.component';

import { PageMap } from '../pages/map/map';
import { PageMapView } from '../pages/map-view/map-view';
import { PageInfo } from '../pages/info/info';
import { PageFAQ } from '../pages/faq/faq';

import { PositionService } from '../providers/position';
import { MarkersService } from '../providers/markers';

@NgModule({
  declarations: [
    MyApp,
    PageMap,
    PageMapView,
    PageNews,
    PageInfo,
    PageFAQ
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PageMap,
    PageMapView,
    PageNews,
    PageInfo,
    PageFAQ
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: IonicErrorHandler
    },
    PositionService,
    MarkersService
  ]
})
export class AppModule {}
