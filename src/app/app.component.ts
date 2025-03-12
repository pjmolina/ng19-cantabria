import { Component } from '@angular/core';
import { User, UserComponent } from './user/user.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [UserComponent],
})
export class AppComponent {
  title = 'Titulo4';
  seleccionado = '';

  constructor() {
    console.log('Constructor Invocado PPal');
  }

  procesarSeleccion(user: User): void {
    this.seleccionado = `${user.nombre} ${user.apellido}`;
  }
}
