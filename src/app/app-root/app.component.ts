import { Component, OnInit } from '@angular/core';
import { User } from '../domain/user';
import { LoggerService } from '../services/logger.service';
import { FormsModule } from '@angular/forms';
import { PlanetService } from '../services/planet.service';
import { RouterModule } from '@angular/router';
import { conf } from '../environments/environment';
import { NgIf } from '@angular/common';
import { AutorizadosDirective } from '../directives/autorizados.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [FormsModule, RouterModule, NgIf, AutorizadosDirective]
  //providers: [{ provide: LoggerService, useClass: Logger2Service }],
})
export class AppComponent implements OnInit {
  title = 'Titulo4';
  seleccionado = '';
  searchText = '';
  hoy = new Date();
  feature3 = conf.feature3;

  users: User[] = [
    {
      nombre: 'Ana',
      apellido: 'Garcia',
      age: 15
    },
    {
      nombre: 'Ana',
      apellido: 'Perez',
      age: 17
    },
    {
      nombre: 'Matias',
      apellido: 'Garcia',
      age: 12
    },
    {
      nombre: 'Pablo',
      apellido: 'Garcia',
      age: 21
    },
    {
      nombre: 'Ramón',
      apellido: 'Martinez',
      age: 45
    },
    {
      nombre: 'N5',
      apellido: 'Martinez',
      age: 23
    }
  ];

  constructor(
    private logger: LoggerService,
    private planetService: PlanetService
  ) {
    logger.log('Constructor Invocado PPal');
  }

  //Version con promesas
  // ngOnInit(): void {
  //   console.log('1');

  //   this.planetService
  //     .getPlanetsWithPromise()
  //     .then((data) => {
  //       console.log(data);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     })
  //     .finally(() => {
  //       console.log('fin');
  //     });
  //   console.log('2');
  // }

  // Version con observables
  ngOnInit(): void {
    console.log('1');

    this.planetService.getPlanets().subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (err) => {
        console.error(err);
      },
      complete: () => {
        console.log('fin');
      }
    });

    console.log('2');
  }

  procesarSeleccion(user: User): void {
    this.seleccionado = `${user.nombre} ${user.apellido}`;
    this.logger.log('Seleccionado ' + this.seleccionado);
  }
}
