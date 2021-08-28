import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReceivedModel } from '../models/receivedModel';

@Injectable({
  providedIn: 'root',
})
export class ReceivedService {
  _memorandosUrl = 'http://localhost:3000/api/v1/received';

  constructor(private http: HttpClient) {}

  getAllReceived() {
    return this.http.get<ReceivedModel>(this._memorandosUrl);
  }
}
