import { Component, OnInit } from '@angular/core';

export interface MensajesEnviados {
  name: string;

  message: string;
}

const ELEMENT_DATA: MensajesEnviados[] = [
  { name: 'Carlos', message: 'Holaaa' },
  { name: 'Carla', message: 'Hello' },
  { name: 'Pedro', message: 'Que tal?' },
  { name: 'Maria', message: 'Chau!' },
];

@Component({
  selector: 'app-sentmessages',
  templateUrl: './sentmessages.component.html',
  styleUrls: ['./sentmessages.component.scss'],
})
export class SentmessagesComponent implements OnInit {
  displayedColumns: string[] = ['name', 'message'];
  dataSource = ELEMENT_DATA;

  constructor() {}

  ngOnInit(): void {}
}
