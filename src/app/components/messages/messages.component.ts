import { Component, OnInit } from '@angular/core';

export interface MensajesRecibidos {
  name: string;

  message: string;
}

const ELEMENT_DATA: MensajesRecibidos[] = [
  { name: 'Carlos', message: 'Holaaa' },
  { name: 'Carla', message: 'Hello' },
  { name: 'Pedro', message: 'Que tal?' },
  { name: 'Maria', message: 'Chau!' },
  { name: 'Carlos', message: 'Holaaa' },
  { name: 'Carla', message: 'Hello' },
  { name: 'Pedro', message: 'Que tal?' },
  { name: 'Maria', message: 'Chau!' },
];

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
})
export class MessagesComponent implements OnInit {
  displayedColumns: string[] = ['name', 'message'];
  dataSource = ELEMENT_DATA;
  constructor() {}

  ngOnInit(): void {}
}
