import { Component, OnInit } from '@angular/core';
import { receivedData } from 'src/app/models/receivedData';
import { ReceivedService } from 'src/app/services/received.service';

export interface MensajesRecibidos {
  name: string;

  message: string;
}

const ELEMENT_DATA: MensajesRecibidos[] = [
  // { name: 'Carlos', message: 'Holaaa' },
  // { name: 'Carla', message: 'Hello' },
  // { name: 'Pedro', message: 'Que tal?' },
  // { name: 'Maria', message: 'Chau!' },
  // { name: 'Carlos', message: 'Holaaa' },
  // { name: 'Carla', message: 'Hello' },
  // { name: 'Pedro', message: 'Que tal?' },
  // { name: 'Maria', message: 'Chau!' },
];

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
})
export class MessagesComponent implements OnInit {
  displayedColumns: string[] = ['name', 'message'];
  dataSource = ELEMENT_DATA;
  receivedList: any[] = [];

  constructor(private _receivedService: ReceivedService) {}

  ngOnInit(): void {
    this._receivedService.getAllReceived().subscribe((data) => {
      this.receivedList = data.name;
      console.log(data);
    });
  }
}
