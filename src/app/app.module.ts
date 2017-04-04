import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RoomComponent } from './room/room.component';
import { RoomService } from './room.service';

import { VenueApi, BASE_PATH } from './ms/index';


@NgModule({
  declarations: [
    AppComponent,
    RoomComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    RoomService,
    VenueApi,
    { provide: BASE_PATH, useValue: "http://localhost:9292/conference-venue/api" },
    { provide: "roomServiceUrl", useValue: "http://localhost:9292/conference-venue/api" }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
