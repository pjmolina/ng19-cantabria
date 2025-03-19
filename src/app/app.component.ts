import { Component, OnInit } from '@angular/core';
import { UserComponent } from './user/user.component';
import { DatePipe, JsonPipe, NgFor, NgIf } from '@angular/common';
import { User } from './domain/user';
import { LoggerService } from './services/logger.service';
import { ResaltaDirective } from './directives/resalta.directive';
import { CurrencyPipe } from './pipes/currency.pipe';
import { FilterByNamePipe } from './pipes/filter-by-name.pipe';
import { FormsModule } from '@angular/forms';
import { PlanetService } from './services/planet.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    UserComponent,
    NgIf,
    NgFor,
    JsonPipe,
    ResaltaDirective,
    CurrencyPipe,
    FilterByNamePipe,
    FormsModule,
    DatePipe,
  ],
  //providers: [{ provide: LoggerService, useClass: Logger2Service }],
})
export class AppComponent implements OnInit {
  title = 'Titulo4';
  seleccionado = '';
  searchText = '';
  hoy = new Date();

  users: User[] = [
    {
      nombre: 'Ana',
      apellido: 'Garcia',
      age: 15,
    },
    {
      nombre: 'Ana',
      apellido: 'Perez',
      age: 17,
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

  constructor(
    private logger: LoggerService,
    private planetService: PlanetService
  ) {
    logger.log('Constructor Invocado PPal');
  }

  ngOnInit(): void {
    console.log('1');

    this.planetService
      .getPlanets()
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        console.log('fin');
      });
    console.log('2');
  }

  procesarSeleccion(user: User): void {
    this.seleccionado = `${user.nombre} ${user.apellido}`;
    this.logger.log('Seleccionado ' + this.seleccionado);
  }
}
