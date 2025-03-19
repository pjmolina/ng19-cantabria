import { Component, OnInit } from '@angular/core';
import { PlanetService } from '../../services/planet.service';
import { Planet } from '../../domain/planet';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-planet-list',
  imports: [NgFor, NgIf],
  templateUrl: './planet-list.component.html',
  styleUrl: './planet-list.component.scss',
})
export class PlanetListComponent implements OnInit {
  planets: Planet[] = [];
  error = '';
  cargando = false;

  constructor(private planetService: PlanetService) {}

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
      },
      complete: () => {
        this.cargando = false;
      },
    });
  }
}
