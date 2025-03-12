import { Component } from '@angular/core';
import { UserComponent } from './user/user.component';
import { NgFor, NgIf } from '@angular/common';
import { User } from './domain/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [UserComponent, NgIf, NgFor],
})
export class AppComponent {
  title = 'Titulo4';
  seleccionado = '';

  users: User[] = [
    {
      nombre: 'Ana',
      apellido: 'Garcia',
    },
    {
      nombre: 'Matias',
      apellido: 'Garcia',
    },
    {
      nombre: 'Pablo',
      apellido: 'Garcia',
    },
    {
      nombre: 'Ramón',
      apellido: 'Martinez',
    },
    {
      nombre: 'N5',
      apellido: 'Martinez',
    },
  ];

  constructor() {
    console.log('Constructor Invocado PPal');
  }

  procesarSeleccion(user: User): void {
    this.seleccionado = `${user.nombre} ${user.apellido}`;
  }
}
