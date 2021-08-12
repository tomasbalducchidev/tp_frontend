import { Component, OnInit } from '@angular/core';

interface Contacto {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-newmessages',
  templateUrl: './newmessages.component.html',
  styleUrls: ['./newmessages.component.scss'],
})
export class NewmessagesComponent implements OnInit {
  contactos: Contacto[] = [
    { value: 'pepe-0', viewValue: 'Pepe' },
    { value: 'pipa-1', viewValue: 'Pipa' },
    { value: 'juanita-2', viewValue: 'Juanita' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
