import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MensajesRecibidos } from '../components/messages/messages.component';

@Injectable({
  providedIn: 'root',
})
export class ReceivedService {
  _memorandosUrl = 'http://localhost:3000/api/v1/received';

  constructor(private http: HttpClient) {}

  getAllReceived() {
    return this.http.get<MensajesRecibidos>(this._memorandosUrl);
  }
}
