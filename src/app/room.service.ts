import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class RoomService {

  constructor(private http: Http, @Inject("roomServiceUrl") private url: string) { }

  getRooms(): Observable<Array<any>> {

    var allRooms = this.url + "/rooms";

    return this.http.request(allRooms)
      .map(r => r.json());

  }
}
