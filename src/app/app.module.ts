import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RoomComponent } from './room/room.component';
import { RoomService } from './room.service';

import { VenueApi, BASE_PATH } from './ms/index';
import { ScheduleComponent } from './schedule/schedule.component';

import { environment } from '../environments/environment';

var routes: Routes = [
  { path: '', redirectTo: '/schedules', pathMatch: 'full' },
  { path: "schedules", component: ScheduleComponent },
  { path: "rooms", component: RoomComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    RoomComponent,
    ScheduleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    RoomService,
    VenueApi,
    { provide: BASE_PATH, useValue: environment.uriPath },
    { provide: "roomServiceUrl", useValue: environment.uriPath }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
