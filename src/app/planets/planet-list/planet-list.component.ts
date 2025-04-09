import { Component, OnInit } from '@angular/core';
import { PlanetService } from '../../services/planet.service';
import { Planet } from '../../domain/planet';
import { NgFor } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-planet-list',
  imports: [NgFor, RouterModule],
  templateUrl: './planet-list.component.html',
  styleUrl: './planet-list.component.scss',
})
export class PlanetListComponent implements OnInit {
  planets: Planet[] = [];
  error = '';
  cargando = false;

  constructor(private planetService: PlanetService, private router: Router) {}

  ngOnInit(): void {
    this.cargando = true;
    this.planetService.getPlanets().subscribe({
      next: (data) => {
        this.planets = data;
        this.error = '';
      },
      error: (err) => {
        this.planets = [];
        this.error = err.message;
        this.cargando = false;
      },
      complete: () => {
        this.cargando = false;
      },
    });
  }
  gotoInicio(): void {
    void this.router.navigate(['']);
  }
}
