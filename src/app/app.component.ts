import { Component } from '@angular/core';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [UserComponent],
})
export class AppComponent {
  title = 'Titulo4';
  seleccionado = '';

  procesarSeleccion(nombre: string): void {
    this.seleccionado = nombre;
  }
}
