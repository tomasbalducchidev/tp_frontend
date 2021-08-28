import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ReceivedModel } from 'src/app/models/receivedModel';

import { ReceivedService } from 'src/app/services/received.service';

// export interface MensajesRecibidos {
//   name: string;
//   message: string;
// }

// const ELEMENT_DATA: MensajesRecibidos[] = [
//   // { name: 'Carlos', message: 'Holaaa' },
//   // { name: 'Carla', message: 'Hello' },
//   // { name: 'Pedro', message: 'Que tal?' },
//   // { name: 'Maria', message: 'Chau!' },
//   // { name: 'Carlos', message: 'Holaaa' },
//   // { name: 'Carla', message: 'Hello' },
//   // { name: 'Pedro', message: 'Que tal?' },
//   // { name: 'Maria', message: 'Chau!' },
// ];

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
})
export class MessagesComponent implements OnInit {
  ELEMENT_DATA: ReceivedModel[] = [];
  displayedColumns: string[] = [
    'idreceived',
    'de',
    'para',
    'message',
    // 'isVisible',
  ];
  dataSource = new MatTableDataSource<ReceivedModel>(this.ELEMENT_DATA);

  constructor(private _receivedService: ReceivedService) {}

  ngOnInit() {
    this.getAllReceived();
  }

  public getAllReceived() {
    let resp = this._receivedService.getAllReceived();
    resp.subscribe(
      (received) =>
        (this.dataSource.data = received as unknown as ReceivedModel[])
    );
  }
}
