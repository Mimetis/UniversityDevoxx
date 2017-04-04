import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { RoomService } from '../room.service';
import { Room, VenueApi } from '../ms/index';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  constructor(private roomService: VenueApi) { }

  rooms: Array<Room>;
  ngOnInit() {

    this.roomService.allRooms()
      .subscribe(r => this.rooms = r.sort((a,b) => a.capacity > b.capacity ? -1 : 1));

  }

}
