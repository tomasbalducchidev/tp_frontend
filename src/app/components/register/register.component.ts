import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

interface Ciudad {
  value: string;
  viewValue: string;
}
interface Pais {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Debe ingresar una dirección de correo';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  hide = true;

  ciudades: Ciudad[] = [
    { value: 'rosario-0', viewValue: 'Rosario' },
    { value: 'montevideo-1', viewValue: 'Montevideo' },
    { value: 'lima-2', viewValue: 'Lima' },
  ];

  paises: Pais[] = [
    { value: 'argentina-0', viewValue: 'Argentina' },
    { value: 'uruguay-1', viewValue: 'Uruguay' },
    { value: 'peru-2', viewValue: 'Peru' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
