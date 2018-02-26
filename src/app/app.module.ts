import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HolidaysService } from './shared/services/holidays.service';
import { HolidaysListComponent } from './holidays-list/holidays-list.component';
import { HolidayDetailComponent } from './holiday-detail/holiday-detail.component';
import { KeysPipe } from './shared/pipes/keys.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HolidaysListComponent,
    HolidayDetailComponent,
    KeysPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/holidays',
        pathMatch: 'full'
      },{
        path: 'holidays',
        component: HolidaysListComponent
      },{
        path: 'details/:holiday',
        component: HolidayDetailComponent
      }
    ])
  ],
  providers: [HolidaysService],
  bootstrap: [AppComponent]
})
export class AppModule { }
