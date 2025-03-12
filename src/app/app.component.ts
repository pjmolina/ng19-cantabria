import { Component } from '@angular/core';
import { UserComponent } from './user/user.component';
import { JsonPipe, NgFor, NgIf } from '@angular/common';
import { User } from './domain/user';
import { Logger2Service, LoggerService } from './services/logger.service';
import { ResaltaDirective } from './directives/resalta.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [UserComponent, NgIf, NgFor, JsonPipe, ResaltaDirective],
  //providers: [{ provide: LoggerService, useClass: Logger2Service }],
})
export class AppComponent {
  title = 'Titulo4';
  seleccionado = '';

  users: User[] = [
    {
      nombre: 'Ana',
      apellido: 'Garcia',
      age: 15,
    },
    {
      nombre: 'Matias',
      apellido: 'Garcia',
      age: 12,
    },
    {
      nombre: 'Pablo',
      apellido: 'Garcia',
      age: 21,
    },
    {
      nombre: 'Ramón',
      apellido: 'Martinez',
      age: 45,
    },
    {
      nombre: 'N5',
      apellido: 'Martinez',
      age: 23,
    },
  ];

  constructor(private logger: LoggerService) {
    logger.log('Constructor Invocado PPal');
  }

  procesarSeleccion(user: User): void {
    this.seleccionado = `${user.nombre} ${user.apellido}`;
    this.logger.log('Seleccionado ' + this.seleccionado);
  }
}
